import { HStack } from 'native-base'

import { Header } from '../components/Header'

export function List(){
    return(
        <HStack flex={1} bg='primary.800'>
            <Header title='Filmes' showBackButton/>
        </HStack>
    )
}