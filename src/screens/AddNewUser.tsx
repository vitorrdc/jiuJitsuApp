import { useState } from "react"
import { View, Text, TextInput, Alert } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import colors from "tailwindcss/colors"
import { Auth, createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../services/firebase"

export function AddNewUser() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function createUser() {
    try {
      const value = await createUserWithEmailAndPassword(auth, email, password)
      Alert.alert('Conta', 'Cadastrado com sucesso!')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <View className="flex-1 bg-background w-full  items-center px-6">
      <Text className="text-white font-bold text-xl mt-8 mb-10">
        Cadastrar novo aluno
      </Text>
      <View className="w-full bg-zinc-600 rounded-lg p-2 py-4">
        <Text className="text-white ml-2">
          Nome
        </Text>
        <TextInput 
          placeholder="Digite o nome ou Apelido"
          className="bg-background border text-zinc-500 rounded-lg border-zinc-600 mt-1 p-2"
          placeholderTextColor='gray'
        />
        <Text className="text-white ml-2 mt-4">
          E-mail
        </Text>
        <TextInput 
          placeholder="Ex: aluno@provedor.com"
          className="bg-background border text-zinc-500 rounded-lg border-zinc-600 mt-1 p-2"
          placeholderTextColor='gray'
          onChangeText={setEmail}
        />
        <Text className="text-white ml-2 mt-4">
          Senha provisória
        </Text>
        <TextInput 
          className="bg-background text-zinc-500 border rounded-lg border-zinc-600 mt-1 p-2"
          placeholderTextColor='gray'
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Text className="text-white ml-2 mt-4">
          Repetir senha
        </Text>
        <TextInput 
          className="bg-background text-zinc-500 border rounded-lg border-zinc-600 mt-1 p-2"
          placeholderTextColor='gray'
          secureTextEntry={true}
        />
        <TouchableOpacity 
          className="bg-green-600 w-full h-10 rounded-lg mt-6 py-1"
          activeOpacity={0.8}
          onPress={createUser}
        >
          <Text className="text-center text-white text-lg">
            Cadastrar
          </Text>
        </TouchableOpacity>


      
      </View>

    </View>
  )
}