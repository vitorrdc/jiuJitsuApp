import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { BackButton } from "../components/BackButton";

export function ConfirmAttendance() {
  return (
    <View className="flex-1 bg-background items-center p-4">
      <View className="flex-row w-full justify-center mb-8 mt-6">
        <View className="absolute left-0">
          <BackButton /> 
        </View>
        <Text className='text-white font-bold text-xl'>
          Confirmar Presenças
        </Text>
      </View>
      <View className="w-full bg-zinc-600 items-center rounded-lg p-4">
        <Text className="text-white font-semibold text-base mb-4">
          10/03/2023 - 18:15h às 19:30h
        </Text>
        <View 
          className="w-full bg-background border border-zinc-400 rounded-lg p-2 flex-row justify-between mb-2"
        >
          <Text className="text-white text-base">
            Vitor Ribeiro
          </Text>
          <TouchableOpacity  
            className="bg-green-500 rounded-lg w-8 h-6"
          />
        </View>
        <View 
          className="w-full bg-background border border-zinc-400 rounded-lg p-2 flex-row justify-between mb-2"
        >
          <Text className="text-white text-base">
            Danilo Walter
          </Text>
          <TouchableOpacity  
            className="bg-green-500 rounded-lg w-8 h-6"
          />
        </View>
        <View 
          className="w-full bg-background border border-zinc-400 rounded-lg p-2 flex-row justify-between mb-2"
        >
          <Text className="text-white text-base">
            Eduardo 
          </Text>
          <TouchableOpacity  
            className="bg-zinc-500 rounded-lg w-8 h-6"
          />
        </View>
        <TouchableOpacity className="bg-green-500 rounded-lg w-full p-2">
          <Text className="text-white font-semibold text-center text-lg">
            Finalizar conferência
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}