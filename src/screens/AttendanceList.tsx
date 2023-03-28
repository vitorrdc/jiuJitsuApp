import {
  Center,
  VStack,
  Heading,
  ScrollView,
  Button,
  Modal,
  Stack,
  Text,
} from 'native-base'
import { useState } from 'react'

export function AttendanceList() {
  const [showModal, setShowModal] = useState(false)
  const students: string[] = ['Vitinho', 'Danilo', 'Davi', 'Wesley']

  return (
    <VStack flex={1} backgroundColor="gray.900" p={6}>
      <Center>
        <Heading color="gray.100" fontFamily="heading" fontSize="2xl">
          Presenças Gerais
        </Heading>
      </Center>
      <ScrollView showsVerticalScrollIndicator={false} paddingBottom={100}>
        {students.map((student, index) => {
          return (
            <Center key={index}>
              <Button
                onPress={() => setShowModal(true)}
                width="full"
                backgroundColor="blue.500"
                mt={3}
              >
                {student}
              </Button>
              <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px" backgroundColor="gray.200">
                  <Modal.CloseButton />
                  <Modal.Header backgroundColor="gray.200">
                    <Text fontWeight="bold" fontSize="lg">
                      Presença por faixa
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
        })}
      </ScrollView>
    </VStack>
  )
}