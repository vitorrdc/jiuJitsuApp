import { VStack, Text, Button, Modal } from 'native-base'
import { useState } from 'react'

export function ConfirmAttendance() {
  const [showModal, setShowModal] = useState(false)

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
        <Button onPress={() => setShowModal(true)} bgColor="blue.500">
          <Text color="white" fontFamily="heading">
            10/03/2023 - 18:15h às 19:30h
          </Text>
        </Button>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Contact Us</Modal.Header>
            <Modal.Body>
              <Text>TESTE </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  variant="ghost"
                  colorScheme="blueGray"
                  onPress={() => {
                    setShowModal(false)
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onPress={() => {
                    setShowModal(false)
                  }}
                >
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </VStack>
    </VStack>
  )
}
