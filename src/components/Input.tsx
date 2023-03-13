import {
  FormControl,
  IInputProps,
  Input as NativeBaseInput,
  Text,
} from 'native-base'

type Props = IInputProps & {
  errorMessage?: string | null
  label?: string
}

export function Input({
  errorMessage = null,
  label,
  isInvalid,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} marginBottom={4}>
      {label && (
        <Text color="gray.200" mb={1}>
          {label}
        </Text>
      )}
      <NativeBaseInput
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        placeholderTextColor="gray.300"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500',
        }}
        _focus={{
          bg: 'gray.700',
          borderWidth: 1,
          borderColor: 'gray.100',
        }}
        {...rest}
      />
    </FormControl>
  )
}
