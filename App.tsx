/* eslint-disable camelcase */
import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading'
import { Routes } from './src/routes'
import { NativeBaseProvider } from 'native-base'
import { THEME } from './src/theme'

export default function App() {
  const [auth, setAuth] = useState(true)

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_800ExtraBold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <Routes />
      <StatusBar
        barStyle="light-content"
        backgroundColor="#090909"
        hidden={false}
      />
    </NativeBaseProvider>
  )
}
