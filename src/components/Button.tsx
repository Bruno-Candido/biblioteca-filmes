import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base'

interface Props extends IButtonProps {
    title: string
}

export function Button({ title, ...rest}: Props){
    return(
        <ButtonNativeBase
            w={70}
            h={16}
            rounded={50}
            fontSize='md'
            textTransform='uppercase'
            bg='primary.500'
            _pressed={{
                bg: 'primary.700'
            }}
            { ...rest }
        >
            <Text fontFamily='heading' color='white'>
                { title }
            </Text>
        </ButtonNativeBase>
    )
}