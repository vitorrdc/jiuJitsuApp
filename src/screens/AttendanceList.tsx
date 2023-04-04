import {
  Center,
  VStack,
  Heading,
  Button,
  Modal,
  Stack,
  Text,
  Input,
  ScrollView,
} from 'native-base'
import { useState } from 'react'

type StudentsData = {
  nome: string
  faixa_branca: string
  faixa_azul: string
}

export function AttendanceList() {
  const [showModal, setShowModal] = useState(false)
  const [students, setStudents] = useState<StudentsData[]>([
    {
      nome: 'Vitor',
      faixa_branca: '180 aulas',
      faixa_azul: '10 aulas',
    },
    {
      nome: 'Fernando',
      faixa_branca: '120 aulas',
      faixa_azul: '16 aulas',
    },
    {
      nome: 'Lucas',
      faixa_branca: '135 aulas',
      faixa_azul: '127 aulas',
    },
  ])
  const [originalsStudents] = useState<StudentsData[]>([
    {
      nome: 'Vitor',
      faixa_branca: '180 aulas',
      faixa_azul: '10 aulas',
    },
    {
      nome: 'Fernando',
      faixa_branca: '120 aulas',
      faixa_azul: '16 aulas',
    },
    {
      nome: 'Lucas',
      faixa_branca: '135 aulas',
      faixa_azul: '127 aulas',
    },
  ])
  const [studentsData, setStudentsData] = useState<StudentsData>(
    {} as StudentsData,
  )

  function handleSetModalVisibility(data?: StudentsData | any) {
    setShowModal(true)
    setStudentsData(data)
  }

  function searchItem(item: string) {
    const filtereds = JSON.parse(JSON.stringify(originalsStudents))
    setStudents(
      filtereds.filter((student: StudentsData) => student.nome.includes(item)),
    )
  }

  return (
    <VStack flex={1} backgroundColor="gray.900" p={6}>
      <Center>
        <Heading color="gray.100" fontFamily="heading" fontSize="2xl">
          Presenças Gerais
        </Heading>
      </Center>
      <Stack mb={8}>
        <Input
          mt={6}
          backgroundColor="gray.400"
          borderColor="gray.300"
          placeholder="Buscar aluno"
          onChangeText={(item) => searchItem(item)}
          color="white"
          _focus={{ borderColor: 'gray.200' }}
        />
      </Stack>
      <VStack>
        <Center>
          <ScrollView
            width="full"
            showsVerticalScrollIndicator={false}
            paddingBottom={100}
          >
            {students.map((data, index) => {
              return (
                <Button
                  onPress={() => handleSetModalVisibility(data)}
                  width="full"
                  backgroundColor="blue.500"
                  mt={3}
                  key={index}
                >
                  {data.nome}
                </Button>
              )
            })}
          </ScrollView>
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            overlayVisible={true}
            backdropVisible={true}
          >
            <Modal.Content maxWidth="400px" backgroundColor="gray.200">
              <Modal.CloseButton />
              <Modal.Header backgroundColor="gray.200">
                <Text fontWeight="bold" fontSize="lg">
                  Presença por faixa:
                </Text>
              </Modal.Header>
              <Modal.Body>
                <Stack
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Text>Faixa branca</Text>
                  <Text>{studentsData.faixa_branca}</Text>
                </Stack>
                <Stack
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Text>Faixa azul</Text>
                  <Text>{studentsData.faixa_azul}</Text>
                </Stack>
              </Modal.Body>
              <Modal.Footer backgroundColor="gray.200">
                <Button.Group space={2}>
                  <Button
                    onPress={() => {
                      setShowModal(false)
                    }}
                    backgroundColor="gray.900"
                  >
                    Fechar
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Center>
      </VStack>
    </VStack>
  )
}
