import {
  VStack,
  Text,
  Button,
  Modal,
  Stack,
  Checkbox,
  HStack,
  Input,
} from 'native-base'
import { useState } from 'react'

type StudentsData = {
  id: number
  name: string
}

export function ConfirmAttendance() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showNewStudendModal, setShowNewStudentModal] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOpenNewStudentModal, setIsOpenNewStudentModal] =
    useState<boolean>(false)
  const [studentsList, setStudentsList] = useState<StudentsData[]>([
    {
      id: 1,
      name: 'Pedro',
    },
    {
      id: 2,
      name: 'Gustavo',
    },
    {
      id: 3,
      name: 'Frederico',
    },
    {
      id: 4,
      name: 'Lucas',
    },
    {
      id: 5,
      name: 'Carlos',
    },
  ])
  const [originalStudentList, setOriginalStudentList] = useState<
    StudentsData[]
  >([
    {
      id: 1,
      name: 'Pedro',
    },
    {
      id: 2,
      name: 'Gustavo',
    },
    {
      id: 3,
      name: 'Frederico',
    },
    {
      id: 4,
      name: 'Lucas',
    },
    {
      id: 5,
      name: 'Carlos',
    },
  ])

  const date: string = '10/01/2023'
  const time: string = '18:15h - 19:30h'

  function handleShowModal() {
    setShowModal(true)
    setIsOpen(true)
  }

  function handleShowNewStudentModal() {
    setShowNewStudentModal(true)
    setIsOpenNewStudentModal(true)
  }

  function searchStudent(item: string) {
    setStudentsList(
      originalStudentList.filter((student) => student.name.includes(item)),
    )
  }

  return (
    <VStack backgroundColor="gray.900" flex={1} px={6}>
      <Text
        color="white"
        fontFamily="heading"
        fontSize="xl"
        textAlign="center"
        mt={6}
      >
        Confirmar presença
      </Text>
      <VStack w="full" backgroundColor="gray.400" mt={10}>
        <Button
          onPress={handleShowModal}
          bgColor={isOpen === true ? 'gray.200' : 'blue.500'}
        >
          <Text color="white" fontFamily="heading">
            {date} - 18:15h às 19:30h
          </Text>
        </Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px" bgColor="gray.200">
            <Modal.CloseButton />
            <Modal.Header bgColor="gray.200">
              <Text fontWeight="bold" color="black">
                {date} - {time}
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Stack>
                <Checkbox value={'1'} colorScheme="green">
                  Vitinho
                </Checkbox>
                <Checkbox value={'2'} colorScheme="green">
                  Fernando
                </Checkbox>
                <Checkbox value={'3'} colorScheme="green">
                  Marcelo
                </Checkbox>
                <Checkbox value={'4'} colorScheme="green">
                  Douglas
                </Checkbox>
              </Stack>
              <Button
                p={1}
                mt={2}
                w={32}
                backgroundColor="blue.500"
                onPress={handleShowNewStudentModal}
              >
                Add Aluno
              </Button>
            </Modal.Body>
            <Modal.Footer bgColor="gray.200">
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  color="white"
                  onPress={() => {
                    setShowModal(false)
                  }}
                  bgColor="gray.100"
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setShowModal(false)
                  }}
                  bgColor="green.500"
                >
                  Salvar presenças
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <Modal
          isOpen={showNewStudendModal}
          onClose={() => setShowNewStudentModal(false)}
        >
          <Modal.Content maxWidth="400px" bgColor="gray.200">
            <Modal.CloseButton />
            <Modal.Header bgColor="gray.200">
              <Text fontWeight="bold" color="black">
                Adicionar Check-in
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                placeholder="Procurar Aluno"
                backgroundColor="gray.100"
                mb={3}
                onChangeText={(item) => searchStudent(item)}
              />
              <Stack>
                {studentsList.map((student, index: number) => {
                  return (
                    <Checkbox
                      key={student.id}
                      value={student[index]}
                      colorScheme="green"
                    >
                      {student.name}
                    </Checkbox>
                  )
                })}
              </Stack>
            </Modal.Body>
            <Modal.Footer bgColor="gray.200">
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  color="white"
                  onPress={() => {
                    setShowNewStudentModal(false)
                  }}
                  bgColor="gray.100"
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setShowNewStudentModal(false)
                  }}
                  bgColor="green.500"
                >
                  Salvar presenças
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </VStack>
    </VStack>
  )
}
