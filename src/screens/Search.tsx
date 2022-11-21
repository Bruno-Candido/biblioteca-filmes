import { VStack, HStack, Text } from 'native-base'
import { CaretLeft, ArrowCircleLeft } from 'phosphor-react-native'

import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { ButtonIcon } from '../components/ButtonIcon'
import { Header } from '../components/Header'

export function Search(){
    return(
        <VStack flex={1} bg='primary.800'>
            <Header title='filmes' showBackButton/>
            <HStack space={3} justifyContent='center'>
                
                <Input placeholder='Titúlo do filme'/>
                <Button title='Buscar'/>
            </HStack>
        </VStack>
    )
}