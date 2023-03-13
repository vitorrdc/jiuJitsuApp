import { View, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Input } from '../components/Input'
import { VStack, Text, HStack, ScrollView } from 'native-base'
import { StudentCard } from '../components/StudentCard'

export function StudentList() {
  return (
    <VStack flex={1} backgroundColor="gray.900" px={6}>
      <VStack mt={6}>
        <Text
          color="gray.100"
          textAlign="center"
          fontFamily="heading"
          fontSize="xl"
          mb={6}
        >
          Lista de Alunos
        </Text>

        <Input placeholder="Buscar aluno" />
      </VStack>

      <HStack justifyContent="space-between" alignItems="center">
        <Text color="gray.200" fontFamily="heading" fontSize="sm">
          Total
        </Text>
        <Text color="gray.200" fontFamily="body" fontSize="sm">
          57
        </Text>
      </HStack>

      <ScrollView showsVerticalScrollIndicator={false} flex={1} mt={4}>
        <StudentCard name="Vitor Ribeiro" />
        <StudentCard name="Fernando Barbosa" />
        <StudentCard name="Danilo Silva" />
      </ScrollView>
    </VStack>
  )
}
