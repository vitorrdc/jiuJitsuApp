import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateCurrentUser,
} from 'firebase/auth'
import { auth, app } from '../services/firebase'
import { isAdmin } from '@firebase/util'
import { useNavigation } from '@react-navigation/native'
import { Box, Center, Link, Text } from 'native-base'
import { Input } from '../components/Input'
import { Button } from '../components/Button'

export function Login() {
  const navigation = useNavigation()

  const [email, setEmail] = useState<any>('adm@adm.com')
  const [password, setPassword] = useState<any>('123456')
  const [isLoading, setIsLoading] = useState(false)

  // async function createUser() {
  //   try {
  //     const value = await createUserWithEmailAndPassword(auth, email, password)
  //     alert(`cadastrado com sucesso, ${value.user.uid}`)
  //   } catch (error) {
  //     alert(error)
  //   }
  // }

  async function userLogin() {
    try {
      setIsLoading(true)
      const value = await signInWithEmailAndPassword(auth, email, password)
      await updateCurrentUser(auth, value.user)
      alert('Entrou')
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     console.log(props)
  //     if (user) {
  //       props?.navigation?.navigate('AddNewUser')
  //     }
  //   })
  // }, [])

  return (
    <Center backgroundColor="gray.900" flex={1} px={6}>
      <Box w="full" backgroundColor="gray.400" p={6} rounded="md">
        <Text
          color="gray.200"
          fontSize="xl"
          textAlign="center"
          mb={6}
          fontFamily="heading"
        >
          Faça seu login
        </Text>
        <Input label="E-mail" placeholder="exemplo@email.com.br" />

        <Input label="Senha" placeholder="******" />

        <Button title="Entrar" onPress={userLogin} isLoading={isLoading} />

        <Link
          w="full"
          mt={6}
          _text={{ w: 'full', textAlign: 'center', color: 'blue.200' }}
        >
          Esqueci minha senha
        </Link>
      </Box>
    </Center>
  )
}
