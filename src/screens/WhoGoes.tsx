import {
  Center,
  Heading,
  ScrollView,
  Stack,
  VStack,
  Text,
  Button,
  Modal,
} from 'native-base'
import { useState } from 'react'

type WhoGoesData = {
  id: number
  date: string
  hour: string
  students: string[]
}

export function WhoGoes() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [timeClass, setTimeClass] = useState<WhoGoesData[]>([
    {
      id: 1,
      date: '10/03/2023',
      hour: '18:15h às 19:30h',
      students: ['Vitinho', 'Fernando', 'Max'],
    },
    {
      id: 2,
      date: '10/03/2023',
      hour: '20:30h às 22:00h',
      students: ['Paulo', 'Lucas', 'Matheus'],
    },
  ])
  const [timeClassData, setTimeClassData] = useState<WhoGoesData>(
    {} as WhoGoesData,
  )

  function handlesetWhoGoesList(jiuClass?: WhoGoesData | any) {
    setShowModal(true)
    setTimeClassData(jiuClass)
  }

  return (
    <VStack flex={1} backgroundColor="gray.900" p={6}>
      <Center>
        <Heading color="white">Quem vai treinar:</Heading>
      </Center>

      <ScrollView>
        {timeClass.map((jiuClass, index) => {
          return (
            <Button
              key={index}
              backgroundColor="blue.500"
              mt={6}
              p={4}
              onPress={() => handlesetWhoGoesList(jiuClass)}
            >
              <Stack flexDirection="row" justifyContent="space-around" w="full">
                <Text color="white" fontWeight="bold">
                  {jiuClass.hour}
                </Text>
                <Text color="white">{jiuClass.date}</Text>
              </Stack>
            </Button>
          )
        })}
      </ScrollView>
      {showModal ? (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          overlayVisible={true}
          backdropVisible={true}
        >
          <Modal.Content maxWidth="400px" backgroundColor="gray.200">
            <Modal.CloseButton />
            <Modal.Header backgroundColor="gray.200">
              <Text fontWeight="bold" fontSize="lg" textAlign="center">
                {timeClassData.hour}
              </Text>
            </Modal.Header>
            <Modal.Body>
              <VStack alignItems="center">
                {timeClassData.students.map((element, index) => {
                  return <Text key={index}>{element}</Text>
                })}
              </VStack>
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
      ) : (
        <></>
      )}
    </VStack>
  )
}
