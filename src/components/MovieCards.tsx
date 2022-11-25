import { TouchableOpacity, TouchableOpacityProps} from 'react-native'
import { Star } from 'phosphor-react-native'
import { Heading, VStack, HStack, Text, Image, useTheme, Box, Divider, AspectRatio} from 'native-base'


export interface CardProps {
    id: string
    title: string 
    vote_average: string 
    backdrop_path: string

}

interface Props extends TouchableOpacityProps {
    data: CardProps
}

export function MovieCards({ data, ...rest }: Props){
    const { colors } = useTheme()

    return(
        <TouchableOpacity { ...rest }>
            <VStack space={2} justifyContent="center" alignItems="center" bgColor='primary.900'>
               
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image resizeMode="cover" source={{uri:`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}} alt='movie img'/>
                    </AspectRatio>
                    <Box>
                        <HStack space={1} mt={2}>
                            {/*45 */}
                            <Text color='white' fontSize='xl'> {data.title} </Text>
                            <Divider bg="primary.300" thickness="1" mx="2" orientation="vertical" />
                            <Text fontSize='2xl'> <Star color='yellow'/> </Text>
                            <Text color='white' fontSize='2xl'> {data.vote_average} </Text>

                        </HStack>
                    </Box>
                    <Divider my='2' w='100%' _light={{ bg: 'primary.300' }} _dark={{ bg: 'primary.50'}} />
            </VStack>           

        </TouchableOpacity>
    )
}