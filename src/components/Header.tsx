import { Text, HStack, Box } from 'native-base'
import { ArrowCircleLeft, Export } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { ButtonIcon } from '../components/ButtonIcon'

interface Props {
    title:string 
    showBackButton?: boolean
    showShareButton?: boolean
}

export function Header( {title, showBackButton = false, showShareButton=false }:Props){
    const EmptyBoxSpace = () => (<Box w={6} h={6}/>)
    const navigation = useNavigation()

    return(
        <HStack w="full" h={24} bgColor="primay.800" alignItems="flex-end" pb={5} px={5}>
            <HStack w="full" alignItems="center" justifyContent="space-between">
                {
                    showBackButton 
                    ? <ButtonIcon icon={ArrowCircleLeft} onPress={() => navigation.goBack()}/> 
                    : <EmptyBoxSpace/>
                }

                <Text color="white" fontFamily="body" fontSize="xl" textAlign="center" fontWeight='bold'>
                    { title }
                </Text>
                {
          showShareButton
            ?
            <ButtonIcon icon={Export} />
            :
            <EmptyBoxSpace />
        }
            </HStack>
        </HStack>
    )
}