import { HStack, Pressable } from 'native-base'

import { Header } from '../components/Header'
import { MOvieDetails } from '../components/MovieDetails'

export function List(){
    return(
        <HStack flex={1} bg='primary.800'>
            <Header title='Fimes' showBackButton/>
            <MOvieDetails/>
        </HStack>
    )
}