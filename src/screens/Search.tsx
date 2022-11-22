import { VStack, HStack, Box, Text, FlatList } from 'native-base'
import { Image } from 'react-native'
import { useState, useEffect } from 'react'

import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Header } from '../components/Header'
import { MovieCards, CardProps } from '../components/MovieCards'

const apiKey = 'api_key=7584a3b6e16494f61507c8edc2047273'
const moviesUrl = 'https://api.themoviedb.org/3/movie/'

export function Search(){
    const [topMovies, setTopMovies] = useState<CardProps[]>([])

    const getTopMovies = async (url) => {
        const response = await fetch(url)
        const data = await response.json()

        setTopMovies(data.results)
    }

    useEffect(() =>{
        const topMovieUrl = `${moviesUrl}top_rated?${apiKey}`

        getTopMovies(topMovieUrl)
    }, [])

    return(
        <VStack flex={1} bg='primary.800'>
            <Header title='filmes'/>
            <HStack space={3} justifyContent='center'>
                
                <Input placeholder='Titúlo do filme'/>
                <Button title='Buscar'/>
            </HStack>
            <Text color='primary.100' size='3xl'>B R N</Text>
            <VStack>
{/*                 <Box>
                <FlatList data={topMovies.map((movie) => movie)}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <MovieCards data={item}/>}/>
                </Box> */}
            </VStack>
        </VStack>
    )
}