import { View, Text} from "react-native";

export function Header() {

  return (
    <View className="w-full h-8 flex-row items-center justify-around ">
      <View className="flex items-center justify-center ml-8">
        <Text className="text-white text-xl font-bold">
          Nome da Academia
        </Text> 
      </View>
     
    </View>
  )
}