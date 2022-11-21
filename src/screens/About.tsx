import { VStack, Text } from 'native-base'

import { Header } from '../components/Header'


export function About(){
    return(
        <VStack flex={1} bg='primary.800'>
            <Header title='Sobre'/>
            <Text color='white' fontSize='xl' fontFamily='body' textAlign='center'>
                App que lista um filme expecifico,{'\n'} contendo sinopse,
                diretor, atores e etc.
            </Text>
        </VStack>
    )
}