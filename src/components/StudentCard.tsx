import { HStack, Text } from 'native-base'
import { Button } from './Button'

type Props = {
  name: string
  onEditStudent(): void
  onDeleteStudent(): void
}

export function StudentCard({ name, onEditStudent, onDeleteStudent }: Props) {
  return (
    <HStack
      backgroundColor="gray.400"
      py={2}
      pl={4}
      pr={2}
      mb={3}
      rounded="md"
      alignItems="center"
    >
      <Text color="gray.100" flex={1}>
        {name}
      </Text>
      <Button
        variant="red"
        title="Remover"
        size="mini"
        w="auto"
        mr={2}
        onPress={onDeleteStudent}
      />
      <Button title="Editar" size="mini" w="auto" onPress={onEditStudent} />
    </HStack>
  )
}
