import { HStack, Text } from 'native-base'
import { Button } from './Button'

type Props = {
  name: string
}

export function StudentCard({ name }: Props) {
  return (
    <HStack
      backgroundColor="gray.400"
      py={2}
      px={4}
      mb={3}
      rounded="md"
      alignItems="center"
    >
      <Text color="gray.100" flex={1}>
        {name}
      </Text>
      <Button title="Editar" size="mini" w="auto" />
    </HStack>
  )
}
