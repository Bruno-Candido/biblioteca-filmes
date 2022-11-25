import {  VStack } from 'native-base'
import { useRoute} from '@react-navigation/native'
import { useState, useEffect } from 'react'

import { Header } from '../components/Header'
import { MovieDetails, ListProps } from '../components/MovieDetails'

interface RouteParams {
    id: string,
    title: string
}

export function ListMovie(){
    const route = useRoute()
    const { id } = route.params as RouteParams
    const [ getDetails, setGetDetails] = useState<ListProps>({} as ListProps)

    const movieDetails = async (url) => {
        const response = await fetch(url)
        const data = await response.json()

        setGetDetails(data)
    }

    useEffect(()=>{
        const urlDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=7584a3b6e16494f61507c8edc2047273`
        movieDetails(urlDetails)
    },[id])

    return(
        <VStack flex={1} bg='primary.800'>
            <Header title={getDetails.title} showBackButton/>
            <MovieDetails data={getDetails}/>
        </VStack>
    )
}