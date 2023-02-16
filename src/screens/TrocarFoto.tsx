import {View, Text, Image, TouchableOpacity} from "react-native";
import { BackButton } from "../components/BackButton";

export function TrocarFoto() {

  return (
    <View className="flex-1 bg-background">
      <View className="mt-6 ml-4">
        <BackButton />
      </View>
      <View className="flex-1 px-8 pt-8 items-center" >
        <Text className="text-white font-bold text-xl">
          Trocar foto 
        </Text>
        <Image 
            source={require('../assets/avatar.jpeg')}
            className="h-32 w-32 rounded-full border-2 border-blue-600 mt-10"
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
  )
}