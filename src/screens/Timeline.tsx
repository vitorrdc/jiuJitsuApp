import {View, Text} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BackButton } from "../components/BackButton";

export function Timeline() {

  return (
    <View className="flex-1 bg-background pr-4 pl-4" >
      <View className="mt-6 ml-4">
        <BackButton />
      </View>

      <Text className="text-white text-2xl font-bold ml-auto mr-auto mb-4">
          Minha Linha do Tempo
      </Text>
      <View className="bg-zinc-800 h-auto w-86 pb-4 rounded-lg pt-6">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
      >
        <View className="flex-row items-center justify-around">
          <Text className="text-white text-base">
            10/01/2019
          </Text>
          <View
            className="w-8 h-8 rounded-full bg-background"
          />
          <View className="w-40 h-10 bg-white rounded-lg flex items-center justify-center">
            <Text className="text-lg">
              Matrícula
            </Text>
          </View>
        </View>
        <View
          className="bg-background h-12 w-1 ml-32"
        />
        <View className="flex-row items-center justify-around">
          <Text className="text-white text-base">
            27/06/2019
          </Text>
          <View
            className="w-8 h-8 rounded-full bg-background"
          />
          <View className="w-40 h-10 bg-white rounded-lg flex items-center justify-center">
            <Text className="text-lg">
              Ganhou 2 graus
            </Text>
          </View>
        </View>
        <View
          className="bg-background h-12 w-1 ml-32"
        />
        <View className="flex-row items-center justify-around">
          <Text className="text-white text-base">
            10/05/2020
          </Text>
          <View
            className="w-8 h-8 rounded-full bg-background"
          />
          <View className="w-40 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Text className="text-lg">
              Faixa azul
            </Text>
          </View>
        </View>
        <View
          className="bg-background h-12 w-1 ml-32"
        />
        <View className="flex-row items-center justify-around">
          <Text className="text-white text-base">
            10/01/2019
          </Text>
          <View
            className="w-8 h-8 rounded-full bg-background"
          />
          <View className="w-40 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Text className="text-lg">
              Ganhou 1 grau
            </Text>
          </View>
        </View>
        <View
          className="bg-background h-12 w-1 ml-32"
        />
        <View className="flex-row items-center justify-around">
          <Text className="text-white text-base">
            10/01/2019
          </Text>
          <View
            className="w-8 h-8 rounded-full bg-background"
          />
          <View className="w-40 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Text className="text-lg">
              Ganhou 2 grau
            </Text>
          </View>
        </View>
        <View
          className="bg-background h-12 w-1 ml-32"
        />
        <View className="flex-row items-center justify-around">
          <Text className="text-white text-base">
            10/01/2019
          </Text>
          <View
            className="w-8 h-8 rounded-full bg-background"
          />
          <View className="w-40 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <Text className="text-lg">
              Faixa roxa
            </Text>
          </View>
        </View>
        <View
          className="bg-background h-12 w-1 ml-32"
        />
        </ScrollView>
      </View>
    </View>
  )
}