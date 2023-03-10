import { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BackButton } from '../components/BackButton'
import { PendenceOk } from '../components/PendenceOk'
import { RelaxTo } from '../components/RelaxTo'

export function Pendences() {
  const [pendence, setPendence] = useState(false)

  return (
    <View className="flex-1 bg-background px-6 pt-8">
      <View>
        <BackButton />
      </View>
      <Text className="text-white font-bold mx-auto mt-4 text-2xl">
        Pendências e Bloqueios
      </Text>
      {pendence ? <PendenceOk /> : <RelaxTo />}
    </View>
  )
}
