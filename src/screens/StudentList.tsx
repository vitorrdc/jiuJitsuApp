import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function StudentList() {
  return (
    <View className="bg-background flex-1 items-center">
      <ScrollView className="flex-1 w-full p-4">
        <Text className="text-white text-center font-bold text-xl mb-6">
          Lista de Alunos
        </Text>
        <TextInput
          placeholder="Buscar aluno"
          placeholderTextColor='gray'
          className="w-full border border-gray-500 py-1 px-2 rounded-lg mb-4"
        
        />
        <Text className="text-white text-xs ">
          Total: 57
        </Text>
        <View className="flex-row justify-between items-center bg-zinc-600 w-full rounded-lg mt-2 px-4 py-2">
          <Text className="text-white">
            Vitor Ribeiro
          </Text>
          <Text className="text-green-600">
            Em dia
          </Text>
          <TouchableOpacity 
            className="bg-blue-500 rounded-lg p-2"
            activeOpacity={0.9}
          
          >
            <Text>
              Editar
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center bg-zinc-600 w-full rounded-lg mt-2 px-4 py-2">
          <Text className="text-white">
            Fernando Barbosa
          </Text>
          <Text className="text-red-600">
            Atrasado
          </Text>
          <TouchableOpacity 
            className="bg-blue-500 rounded-lg p-2"
            activeOpacity={0.9}
          
          >
            <Text>
              Editar
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-between items-center bg-zinc-600 w-full rounded-lg mt-2 px-4 py-2">
        <Text className="text-white">
          Danilo Silva
        </Text>
        <Text className="text-green-600">
          Em dia
        </Text>
        <TouchableOpacity 
          className="bg-blue-500 rounded-lg p-2"
          activeOpacity={0.9}
        
        >
          <Text>
            Editar
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}