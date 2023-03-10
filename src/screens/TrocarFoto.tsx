import { View, Text, Image, TouchableOpacity } from 'react-native'
import { BackButton } from '../components/BackButton'

export function TrocarFoto() {
  return (
    <View className="flex-1 bg-background w-full">
      <View className="mt-6 ml-4">
        <BackButton />
      </View>
      <View className="flex-1 px-8  items-center">
        <Text className="text-white font-bold text-2xl">Trocar foto</Text>
        <View className="bg-zinc-800 h-auto w-86 mt-8 pb-8 rounded-lg pr-4 pl-4 ">
          <Image
            source={require('../assets/avatar.jpeg')}
            className="h-32 w-32 rounded-full border-2 mr-auto ml-auto border-blue-600 mt-10"
          />
          <TouchableOpacity
            className="bg-blue-500 w-full mt-10 h-12 flex-row items-center rounded-xl"
            activeOpacity={0.8}
          >
            <Text className="text-white text-xl ml-auto mr-auto">
              Selecionar foto
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
