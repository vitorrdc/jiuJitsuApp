import { View, ScrollView } from "react-native";
import { Welcome } from "../components/Welcome";
import { Content } from "../components/Content";

export function Home() {

  return (
    <View className="flex-1 bg-background px-8 pt-6" >
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
      >
      <Welcome />
      <Content />
      </ScrollView>  
    </View>
  )
}