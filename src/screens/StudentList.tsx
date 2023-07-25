import { Input } from '../components/Input'
import { VStack, Text, HStack, ScrollView, AlertDialog } from 'native-base'
import { StudentCard } from '../components/StudentCard'
import { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdmNavigatorRoutesProps } from '../routes/adm.routes'
import { Header } from '../components/Header'
import { Button } from '../components/Button'

type StudentsData = {
  id: number
  name: string
}

const studentsData = [
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
]

export function StudentList() {
  const { navigate } = useNavigation<AdmNavigatorRoutesProps>()
  const [originalStudents, setOriginalStudents] =
    useState<StudentsData[]>(studentsData)
  const [students, setStudents] = useState<StudentsData[]>(studentsData)
  const [alertDialogIsOpen, setAlertDialogIsOpen] = useState(false)
  const [studentIdToRemove, setStudentIdToRemove] = useState<
    number | undefined
  >(undefined)
  const cancelRef = useRef(null)

  function searchItem(item: string) {
    setStudents(
      originalStudents.filter((student) =>
        student.name.toLowerCase().includes(item.toLowerCase()),
      ),
    )
  }

  function handleOpenAlertDialog(studentId: number) {
    setAlertDialogIsOpen(true)
    setStudentIdToRemove(studentId)
  }

  function handleCloseAlertDialog() {
    setStudentIdToRemove(undefined)
    setAlertDialogIsOpen(false)
  }

  function handleRemoveStudent() {
    setOriginalStudents((prevStudents) =>
      prevStudents.filter(
        (prevStudent) => prevStudent.id !== studentIdToRemove,
      ),
    )
    setStudents((prevStudents) =>
      prevStudents.filter(
        (prevStudent) => prevStudent.id !== studentIdToRemove,
      ),
    )
    setAlertDialogIsOpen(false)
  }

  function handleEditStudent(studentId: number) {
    navigate('EditStudent', { studentId: studentId.toString() })
  }

  return (
    <VStack flex={1} backgroundColor="gray.900" pt={6}>
      <Header title="Lista de Alunos" />

      <VStack px={6} flex={1}>
        <Input
          label="Buscar aluno"
          placeholder="Nome do aluno"
          onChangeText={(item) => searchItem(item)}
          borderWidth={1}
          borderColor="gray.100"
        />

        <HStack justifyContent="space-between" alignItems="center" mt={4}>
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
                onDeleteStudent={() => handleOpenAlertDialog(student.id)}
                onEditStudent={() => handleEditStudent(student.id)}
              />
            )
          })}
        </ScrollView>
      </VStack>

      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={alertDialogIsOpen}
        onClose={handleCloseAlertDialog}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />

          <AlertDialog.Header fontFamily="heading">
            Remover aluno
          </AlertDialog.Header>
          <AlertDialog.Body>
            Você deseja realmente remover o aluno? Essa operação será
            irreversível.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <HStack flex={1} justifyContent="flex-end">
              <Button
                variant="outline"
                title="Cancelar"
                onPress={handleCloseAlertDialog}
                size="mini"
              />
              <Button
                variant="red"
                title="Remover"
                onPress={handleRemoveStudent}
                size="mini"
              />
            </HStack>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </VStack>
  )
}
