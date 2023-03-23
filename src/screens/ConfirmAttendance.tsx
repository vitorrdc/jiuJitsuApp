import { VStack, Text, Button, Modal, Stack, Checkbox } from 'native-base'
import { useState } from 'react'

export function ConfirmAttendance() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const date: string = '10/01/2023'
  const time: string = '18:15h - 19:30h'

  function handleShowModal() {
    setShowModal(true)
    setIsOpen(true)
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
      </VStack>
    </VStack>
  )
}
