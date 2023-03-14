import { useState } from 'react'
import { BackButton } from '../components/BackButton'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import {
  ScrollView,
  Text,
  VStack,
  Select,
  CheckIcon,
  View,
  Stack,
  Flex,
} from 'native-base'
import { Alert } from 'react-native'
import { flexbox } from 'native-base/lib/typescript/theme/styled-system'

export function StudentEdit() {
  const [belt, setBelt] = useState('')
  const [degree, setDegree] = useState('')

  function handleBeltChange(itemValue: any) {
    setBelt(itemValue)
    if (belt) {
      Alert.alert(
        'Trocou de faixa',
        `Você acabou de trocar a faixa para ${itemValue}`,
      )
    }
  }

  function handleDegreeChange(itemValue: any) {
    setDegree(itemValue)
    if (degree) {
      Alert.alert(
        'Trocou de grau',
        `Você acabou de trocar para ${itemValue} grau(s)`,
      )
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      backgroundColor="gray.900"
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <VStack flex={1} alignItems="center" px={4}>
        <Text color="gray.100" fontFamily="heading" fontSize="xl" mt={6} mb={9}>
          Editar Aluno
        </Text>

        <VStack w="full" backgroundColor="gray.400" p={4} rounded="md">
          <Input placeholder="Digite o nome ou Apelido" label="Nome" />
          <Text color="gray.200">Faixa</Text>
          <Select
            selectedValue={belt}
            accessibilityLabel="Choose Service"
            placeholder="Selecione uma faixa"
            placeholderTextColor={'gray.300'}
            borderColor="gray.700"
            bg="gray.700"
            fontSize="md"
            px={4}
            h={14}
            w="full"
            mb={4}
            color="white"
            _selectedItem={{
              bg: 'white',
              endIcon: <CheckIcon size="5" />,
              color: 'white',
            }}
            mt={1}
            onValueChange={(itemValue) => handleBeltChange(itemValue)}
          >
            <Select.Item label="Branca" value="Branca" />
            <Select.Item label="Azul" value="Azul" />
            <Select.Item label="Roxa" value="Roxa" />
            <Select.Item label="Marrom" value="Marrom" />
            <Select.Item label="Preta" value="Preta" />
          </Select>

          <Text color="gray.200">Graus</Text>
          <Select
            selectedValue={degree}
            accessibilityLabel="Escolha um grau"
            placeholder="Selecione os graus"
            placeholderTextColor={'gray.300'}
            borderColor="gray.700"
            bg="gray.700"
            fontSize="md"
            px={4}
            h={14}
            w="full"
            mb={4}
            color="white"
            _selectedItem={{
              bg: 'white',
              endIcon: <CheckIcon size="5" />,
              color: 'white',
            }}
            mt={1}
            onValueChange={(itemValue) => handleDegreeChange(itemValue)}
          >
            <Select.Item label="Nenhum" value="Nenhum" />
            <Select.Item label="1 Grau" value="1" />
            <Select.Item label="2 Graus" value="2" />
            <Select.Item label="3 Graus" value="3" />
            <Select.Item label="4 Graus" value="4" />
          </Select>

          <Input label="Data do evento" placeholder="Ex: 05/03/2023" />

          <Input label="Descrição do evento" placeholder="Ex: Ganhou 2 graus" />

          <Button title="Atualizar" mt={2} />
        </VStack>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          mt={10}
          w="full"
        >
          <Text fontSize={14} color="gray.200">
            01/10/2022
          </Text>
          <View w={7} h={7} backgroundColor="white" borderRadius="full" />
          <View backgroundColor="white" p={2} borderRadius={10} w={180}>
            <Text color="gray.900" fontSize={14} textAlign="center">
              Matrícula
            </Text>
          </View>
        </Stack>
      </VStack>
    </ScrollView>
  )
}
