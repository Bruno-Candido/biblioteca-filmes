import { VStack, HStack, Box, FlatList } from 'native-base'
import { useState, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFocusEffect} from '@react-navigation/native'

import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Header } from '../components/Header'
import { MovieCards, CardProps } from '../components/MovieCards'

const apiKey = 'api_key=7584a3b6e16494f61507c8edc2047273'
const moviesUrl = 'https://api.themoviedb.org/3/movie/'
const searchMoviesUrl = 'https://api.themoviedb.org/3/search/movie/'

export function Search(){
    const { navigate } = useNavigation()
    const [topMovies, setTopMovies] = useState<CardProps[]>([])
    const [ getSearch, setGetSearch] = useState('')
    const [ getSearchMovies, setGetSearchMovies] = useState('')

    const getTopMovies = async (url) => {
        const response = await fetch(url)
        const data = await response.json()

        setTopMovies(data.results)
    }

    const searchMovies = async () => {
        const response = await fetch(`${searchMoviesUrl}?${apiKey}&query=${getSearch}`)
        const data = await response.json()

        setTopMovies(data.results)
    }

    useFocusEffect(useCallback(() =>{
        const topMovieUrl = `${moviesUrl}top_rated?${apiKey}`

        getTopMovies(topMovieUrl)
    }, []))

    return(
                
        <VStack flex={1} bg='primary.800'>
            <Header title='Filmes'/>
            <HStack space={3} justifyContent='center'>
                
                <Input placeholder='Titúlo do filme' onChangeText={setGetSearch}/>
                <Button title='Buscar' onPress={searchMovies}/>
            </HStack>
             <VStack>
               <Box mt={2}>
                <FlatList data={topMovies.map((movie) => movie)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => 
                        <MovieCards 
                        data={item}
                        onPress={() => navigate('listmovie', {id:item.id})}
                    />}
                    px={1}
                    showsHorizontalScrollIndicator={false}
                    _contentContainerStyle={{pb:80}}
                /> 
                </Box> 
            </VStack>  
        </VStack>
    )
}