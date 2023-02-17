import { Text, View } from "react-native"


export function PendenceOk() {
  return (
    <View className="bg-zinc-800 h-auto w-86 pb-4 rounded-lg p-4 mt-8 flex items-center ">
          <View className="bg-yellow-300 h-32 w-60 rounded-lg p-2">
            <Text className=" font-bold text-lg text-center">
              Você possui débitos em atraso. Entrar em contato com o professor e/ou responsável.
            </Text>
          </View>
        </View>
  )
}