import { View,Text } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from "tailwindcss/colors";

export function Welcome() {
  return (
    <View className="w-full  flex-row justify-between items-center mb-4">
      <View>
          <Text className="text-white text-xl w-30 font-regular">
            Bem-vindo, 
          </Text>
          <Text className="text-white text-3xl font-bold">
            Vitinho
          </Text>
      </View>

      <MaterialCommunityIcons
        name="message-text-outline"
        size={32}
        color={colors.white}
      />
    </View>
  )
}