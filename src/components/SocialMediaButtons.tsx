import { Center, ICenterProps, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = ICenterProps & {
  onPressInstagramButton?: () => void
  onPressFacebookButton?: () => void
  onPressWhatsappButton?: () => void
}

export function SocialMediaButtons({
  onPressFacebookButton,
  onPressInstagramButton,
  onPressWhatsappButton,
  ...rest
}: Props) {
  return (
    <Center flexDirection="row" {...rest}>
      <TouchableOpacity
        style={{ marginHorizontal: 8 }}
        onPress={onPressInstagramButton}
      >
        <Icon
          as={MaterialCommunityIcons}
          name="instagram"
          size={8}
          color="gray.100"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginHorizontal: 8 }}
        onPress={onPressFacebookButton}
      >
        <Icon
          as={MaterialCommunityIcons}
          name="facebook"
          size={8}
          color="gray.100"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginHorizontal: 8 }}
        onPress={onPressWhatsappButton}
      >
        <Icon
          as={MaterialCommunityIcons}
          name="whatsapp"
          size={8}
          color="gray.100"
        />
      </TouchableOpacity>
    </Center>
  )
}
