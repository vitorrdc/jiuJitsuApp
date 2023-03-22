import { TouchableOpacity } from 'react-native'
import { HStack, Text, useTheme } from 'native-base'

type DataProps = {
  id: number
  date: string
  description: string
  read: boolean
}

type Props = {
  data: DataProps
  onPressNotification: (item?: DataProps) => void
}

export function NotificationItem({ data, onPressNotification }: Props) {
  const { colors, radii, space } = useTheme()
  const { date, description, read } = data

  return (
    <HStack alignItems="center" justifyContent="space-between" mb={6}>
      <Text color="gray.100" fontSize="md" mr={8}>
        {date}
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: read ? colors.green[600] : colors.red[600],
          borderRadius: radii.md,
          padding: space[4],
          alignSelf: 'flex-start',
          flexShrink: 1,
          flex: 1,
          minWidth: '60%',
          maxWidth: '60%',
        }}
        activeOpacity={0.7}
        onPress={() => onPressNotification(data)}
      >
        <Text color="gray.100" numberOfLines={1}>
          {description}
        </Text>
      </TouchableOpacity>
    </HStack>
  )
}
