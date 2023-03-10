import { View, ScrollView } from 'react-native'
import { Welcome } from '../components/Welcome'
import { Content } from '../components/Content'

export function Home() {
  return (
    <View className="flex-1 bg-background px-8 pt-6 pr-4 pl-4">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Welcome />
        <View className="bg-zinc-800 h-auto w-86 pb-4 rounded-lg pt-0 ">
          <Content />
        </View>
      </ScrollView>
    </View>
  )
}
