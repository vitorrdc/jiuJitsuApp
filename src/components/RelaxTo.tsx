import { View, Image, Text } from 'react-native'

export function RelaxTo() {
  return (
    <View className="flex justify-center items-center mt-8">
      <Image source={require('../assets/relaxok.png')} />
      <View className="bg-zinc-700 mt-6 h-12 w-full rounded-lg flex items-center justify-center">
        <Text className="text-white font-semibold text-lg">
          Você não possui pendências
        </Text>
      </View>
    </View>
  )
}
