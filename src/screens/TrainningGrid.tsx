import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BackButton } from '../components/BackButton'

const weekDays = ['seg', 'ter', 'qua', 'qui', 'sex', 'sab', 'dom']

export function TrainningGrid() {
  return (
    <View className="flex-1 bg-background p-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-center mt-4 items-center">
          <View className="absolute left-0">
            <BackButton />
          </View>
          <Text className="text-white font-bold text-xl">Grade de treinos</Text>
        </View>
        <View className="items-center mt-6">
          <TouchableOpacity className="bg-blue-500 w-48 p-2 rounded-lg mb-6">
            <Text className="text-center text-white font-regular text-base">
              Novo horário
            </Text>
          </TouchableOpacity>
          <View className="bg-zinc-600 w-full p-2 rounded-lg mb-8">
            <View className="bg-background p-2 w-full rounded-lg border border-zinc-400">
              <Text className="text-white text-center">18:15h às 19:30h</Text>
            </View>
            <View className="w-full flex-row justify-around items-center h-16">
              {weekDays.map((day) => {
                return (
                  <View className="items-center">
                    <Text className="text-white font-regular mb-1">{day}</Text>
                    <View className="bg-green-500 h-6 w-6 rounded-md" />
                  </View>
                )
              })}
            </View>
          </View>
          <View className="bg-zinc-600 w-full p-2 rounded-lg">
            <View className="bg-background p-2 w-full rounded-lg border border-zinc-400">
              <Text className="text-white text-center">20:00h às 22:00h</Text>
            </View>
            <View className="w-full flex-row justify-around items-center h-16">
              {weekDays.map((day) => {
                return (
                  <View className="items-center">
                    <Text className="text-white font-regular mb-1">{day}</Text>
                    <View className="bg-green-500 h-6 w-6 rounded-md" />
                  </View>
                )
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
