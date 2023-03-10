import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { AdmRoutes } from './adm.routes'

export function Routes() {
  return (
    <View className="flex-1 bg-background">
      <NavigationContainer>
        <AdmRoutes />
      </NavigationContainer>
    </View>
  )
}
