import { HStack, Icon, Text } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string
}

export function Header({ title }: Props) {
  const { goBack } = useNavigation()

  return (
    <HStack mb={6} alignItems="center" justifyContent="center" mx={6}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ position: 'absolute', left: 0 }}
        onPress={goBack}
      >
        <Icon as={Feather} name="arrow-left" size={6} color="gray.100" />
      </TouchableOpacity>

      <Text color="gray.100" fontFamily="heading" fontSize="xl">
        {title}
      </Text>
    </HStack>
  )
}
