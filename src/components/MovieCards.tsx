import { TouchableOpacity, TouchableOpacityProps, Image} from 'react-native'
import { Heading, VStack, HStack, Text,  } from 'native-base'


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
    return(
        <TouchableOpacity { ...rest }>
            <HStack
 
            >
                <Text color='white' fontSize='xl'>{data.title}</Text>
                <Text color='primary.100' fontSize='2xl'>{data.vote_average}</Text>

            </HStack>           

        </TouchableOpacity>
    )
}