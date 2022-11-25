import { VStack, Text, Image, AspectRatio, Box, Pressable } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { Header } from '../components/Header'



export function About(){
    const { navigate } = useNavigation()

    return(
        <VStack flex={1} bg='primary.800'>
            <Header title='Sobre'/>
            <Text color='white' fontSize='xl' fontFamily='body' textAlign='center'>
                App para listar um ou varios filmes,{'\n'} contendo sinopse,
                diretores, atores e etc.
            </Text>
            <Box alignItems='center' mt='100%'>
                <Pressable onPress={()=> navigate('search')}>
                <Text color='amber.500'>https://github.com/Bruno-Candido</Text>
                </Pressable>
                
                <AspectRatio w="20%" ratio={16 / 9}>
                    <Image source={{uri:'https://countryflagsapi.com/png/brazil'}} alt='flag'/>
                </AspectRatio>
            </Box>
        </VStack>
    )
}