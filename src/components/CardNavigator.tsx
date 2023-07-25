import {
  Box,
  HStack,
  IBoxProps,
  Icon,
  Text,
  VStack,
  useTheme,
} from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { AdmNavigatorRoutesProps, AdmRoutesProps } from '../routes/adm.routes'
import React from 'react'

type Props = IBoxProps & {
  title: string
  subtitle?: string
  goTo: keyof AdmRoutesProps
}

export function CardNavigator({ title, subtitle, goTo, ...rest }: Props) {
  const { space } = useTheme()
  const { navigate } = useNavigation<AdmNavigatorRoutesProps>()

  function handleGoTo() {
    navigate(goTo)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleGoTo}
      style={{ marginBottom: space[4] }}
    >
      <Box backgroundColor="gray.200" p={6} borderRadius="md" {...rest}>
        <VStack>
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontFamily="heading" fontSize="lg">
              {title}
            </Text>
            <Icon as={Feather} name="arrow-right" size={8} color="blue.600" />
          </HStack>

          {subtitle && (
            <Text fontSize="sm" mt={1}>
              {subtitle}
            </Text>
          )}
        </VStack>
      </Box>
    </TouchableOpacity>
  )
}
