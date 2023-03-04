import {View, TextInput, TouchableOpacity, Text, Alert} from "react-native";
import colors from "tailwindcss/colors";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser } from 'firebase/auth'
import { auth, app } from "../services/firebase";
import { isAdmin } from "@firebase/util";
import { useNavigation } from "@react-navigation/native";


export function Login(props: any) {

  const navigation = useNavigation()

  const [email, setEmail] = useState<any>('adm@adm.com')
  const [password, setPassword] = useState<any>('123456')

  async function createUser() {
    try {
    const value = await createUserWithEmailAndPassword(auth, email, password)
    alert(`cadastrado com sucesso, ${value.user.uid}`)
    } catch (error) {
      alert(error)
    }
  }

  async function userLogin() {
    try {
      const value = await signInWithEmailAndPassword(auth, email, password)
      await updateCurrentUser(auth, value.user )
      alert('Entrou')
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(props)
      if (user) {
        props?.navigation?.navigate('AddNewUser')
        return
      }
    })
  },[])

  return (
    <View className="flex-1 items-center justify-center bg-background p-6" >
      <View className="w-full h-72 rounded-lg p-4 mb-48 bg-zinc-700 flex items-center justify-center">
        <TextInput 
          placeholder="Digite seu e-mail"
          placeholderTextColor={colors.white}
          className="bg-background w-full rounded-lg p-2 h-10 text-white border-zinc-600 border-2  "
          value={email}  
          onChangeText={e => setEmail(e)}      
        />
        <TextInput 
          placeholder="Senha"
          placeholderTextColor={colors.white}
          className="bg-background w-full rounded-lg p-2 h-10 mt-2 text-white border-2 border-zinc-600 "
          secureTextEntry={true}
          value={password}
          onChangeText={e => setPassword(e)}
        />
        <TouchableOpacity 
          className="bg-blue-500 flex w-full ml-auto mr-auto mt-6 h-10 items-center rounded-lg justify-center"
          activeOpacity={0.8}
          onPress={() => userLogin()}
        >
          <Text className="text-white font-semibold">
            ENTRAR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="mt-8">
          <Text className="text-blue-500 text-xs">
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}