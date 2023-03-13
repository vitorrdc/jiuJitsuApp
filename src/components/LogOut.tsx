import { useEffect } from 'react'
import { View } from 'react-native'
import { auth } from '../services/firebase'

export function LogOut() {
  useEffect(() => {
    auth.signOut()
  }, [])

  return <View />
}
