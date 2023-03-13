import { useState } from 'react'
import { Alert } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../services/firebase'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { ScrollView, Text, VStack } from 'native-base'

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{ flex: 1 }}
      backgroundColor="gray.900"
    >
      <VStack flex={1} alignItems="center" px={4}>
        <Text color="gray.100" fontFamily="heading" fontSize="xl" mt={6} mb={9}>
          Cadastrar novo aluno
        </Text>

        <VStack w="full" backgroundColor="gray.400" p={4} rounded="md">
          <Input placeholder="Digite o nome ou Apelido" label="Nome" />

          <Input placeholder="aluno@provedor.com" label="E-mail" />

          <Input
            placeholder="******"
            secureTextEntry
            label="Senha provisória"
          />

          <Input placeholder="******" secureTextEntry label="Repetir senha" />

          <Button title="Cadastrar" mt={2} />
        </VStack>
      </VStack>
    </ScrollView>
  )
}
