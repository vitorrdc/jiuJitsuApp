import {
  Center,
  VStack,
  Heading,
  Button,
  Modal,
  Stack,
  Text,
  Input,
  FlatList,
} from 'native-base'
import { useState } from 'react'

export function AttendanceList() {
  const [showModal, setShowModal] = useState(false)
  const [students, setStudents] = useState<string[]>([
    'Vitinho',
    'Danilo',
    'Davi',
    'Wesley',
  ])
  const [originalsStudents] = useState<string[]>([
    'Vitinho',
    'Danilo',
    'Davi',
    'Wesley',
  ])

  console.log(students[2])

  function renderList(item: string, index: number) {
    return (
      <Center>
        <Button
          onPress={() => setShowModal(true)}
          width="full"
          backgroundColor="blue.500"
          mt={3}
        >
          {item}
        </Button>
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
                Presença por faixa: {item}
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Stack
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text>Faixa branca</Text>
                <Text>135 aulas</Text>
              </Stack>
              <Stack
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text>Faixa azul</Text>
                <Text>87 aulas</Text>
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
    )
  }

  function searchItem(item: string) {
    const filtereds = JSON.parse(JSON.stringify(originalsStudents))
    setStudents(filtereds.filter((student: string) => student.includes(item)))
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
      <FlatList
        data={students}
        renderItem={({ item, index }) => renderList(item, index)}
        keyExtractor={(item) => String(item)}
      />
    </VStack>
  )
}
