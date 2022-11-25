import { VStack, Text } from 'native-base'



export interface ListProps {
    title: string 
    original_title: string
    original_language: string
    overview: string
    popularity: string
    release_date: string
    vote_average: string

}

interface Props {
    data: ListProps
}

export function MovieDetails({ data }: Props){
    return(
        <VStack flex={1} bgColor='primary.800'>
            <Text fontSize='xl' color='primary.100' fontWeight='bold'>
                Titulo: {data.title}{'\n'}
                Titulo original: {data.original_title}{'\n'}
                Idioma original: {data.original_language}{'\n'}
                Popularidade: {data.popularity}{'\n'}
                Data de lançamento: {data.release_date}{'\n'}
                IMDB: {data.vote_average}{'\n'}
            </Text>
            <Text pt={4} color='primary.100' fontSize='xl' fontFamily='heading' fontWeight='bold'>
            {data.overview}
            </Text>
        </VStack>
    )
}