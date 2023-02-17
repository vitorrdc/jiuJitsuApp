import { useState } from "react";
import { View, Image, Text, TouchableOpacity, VirtualizedList } from "react-native";
import { FontAwesome, Feather } from '@expo/vector-icons';
import colors from "tailwindcss/colors";

export function Content() {

  const [qtdGrausNaFaixa, setQtdGrausNaFaixa] = useState([1, 2, 3, 4])

  return (
    <View className="w-full flex items-center mt-8 ">
        <Image 
          source={require('../assets/avatar.jpeg')}
          className="h-32 w-32 rounded-full border-2 border-blue-600"
        />
        <View className="mt-6 w-72 h-4 bg-blue-600 flex items-end rounded-sm">
          <View className="bg-zinc-900 w-14 h-4 mr-2 flex-row">
            {
              qtdGrausNaFaixa.map((grau, i) => {
                return (
                    <View key={i} className="bg-white h-4 w-1 ml-2"/>

                )
              })
            }
          </View>
        </View>
        <View className="flex items-center">
          <Text className= "mt-6 text-2xl font-bold text-blue-600 ">
            Faixa Azul
          </Text>
          <Text className="text-white mt-1 text-xl font-regular">
            10 aulas
          </Text>
          <Text className="text-white mt-1 text-xl font-bold w-full p-1">
            Próxima graduação em: 60 aulas
          </Text>
        </View>
        <Text className="text-white mt-8 text-base font-semibold">Hoje tem treino!</Text>
        <TouchableOpacity 
          className="bg-green-500 w-72 ml-auto mr-auto mt-2 h-12 flex-row items-center rounded-xl"
          activeOpacity={0.8}
        >
            <View className="ml-8">
              <FontAwesome 
                name="calendar"
                size={26}
                color={colors.white}
              />
            </View>
            <Text className="text-white text-xl ml-5 ">
              Confirmar presença!
            </Text>
        </TouchableOpacity>
        <View className="mt-8 flex-row">
          <TouchableOpacity className="ml-2">
            <Feather 
              name="instagram"
              size={22}
              color={colors.white}
            />  
          </TouchableOpacity>
          <TouchableOpacity className="ml-3">
            <FontAwesome 
              name="facebook"
              size={22}
              color={colors.white}
            />
          </TouchableOpacity>
          <TouchableOpacity className="ml-3">
            <FontAwesome 
              name="whatsapp"
              size={22}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
    </View>
  )
}