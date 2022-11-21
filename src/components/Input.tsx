import { Input as NativeBseInput, IInputProps} from 'native-base'

export function Input({ ...rest }: IInputProps){
    return(
        <NativeBseInput
            bg='primary.900'
            h={16}
            w='75%'
            px={4}
            borderColor='primary.600'
            fontSize='md'
            fontFamily='body'
            color='white'
            placeholderTextColor='primary.300'
            _focus={{
                bg:'primary.800',
                borderColor:'primary.600'
            }}
            variant='rounded'
            { ...rest }
        />

    )
}