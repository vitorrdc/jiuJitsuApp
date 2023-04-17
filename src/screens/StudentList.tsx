import { Input } from '../components/Input'
import { VStack, Text, HStack, ScrollView } from 'native-base'
import { StudentCard } from '../components/StudentCard'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StudentEdit } from './StudentEdit'

type StudentsData = {
  id: number
  name: string
}

export function StudentList() {
  const { navigate } = useNavigation()
  const [students, setStudents] = useState<StudentsData[]>([
    {
      id: 1,
      name: 'Vitor',
    },
    {
      id: 2,
      name: 'Gustavo',
    },
    {
      id: 3,
      name: 'Danilo',
    },
    {
      id: 4,
      name: 'Fernando',
    },
    {
      id: 5,
      name: 'Carlos',
    },
  ])
  const [originalsStudents] = useState<StudentsData[]>([
    {
      id: 1,
      name: 'Vitor',
    },
    {
      id: 2,
      name: 'Gustavo',
    },
    {
      id: 3,
      name: 'Danilo',
    },
    {
      id: 4,
      name: 'Fernando',
    },
    {
      id: 5,
      name: 'Carlos',
    },
  ])

  function searchItem(item: string) {
    setStudents(
      originalsStudents.filter((student) => student.name.includes(item)),
    )
  }

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

        <Input
          placeholder="Buscar aluno"
          onChangeText={(item) => searchItem(item)}
        />
      </VStack>

      <HStack justifyContent="space-between" alignItems="center">
        <Text color="gray.200" fontFamily="heading" fontSize="sm">
          Total
        </Text>
        <Text color="gray.200" fontFamily="body" fontSize="sm">
          {students.length}
        </Text>
      </HStack>

      <ScrollView showsVerticalScrollIndicator={false} flex={1} mt={4}>
        {students.map((student) => {
          return (
            <StudentCard
              key={student.id}
              name={student.name}
              onPress={() => navigate('StudentEdit')}
            />
          )
        })}
      </ScrollView>
    </VStack>
  )
}
