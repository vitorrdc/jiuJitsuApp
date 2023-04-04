import {
  Center,
  Heading,
  VStack,
  ScrollView,
  Text,
  Button,
  Modal,
  Stack,
  Input,
} from 'native-base'
import { useState } from 'react'

export function BeltsConfiguration() {
  const belts: string[] = [
    'Branca',
    'Cinza e Branca',
    'Cinza',
    'Cinza e Preta',
    'Amarela e Branca',
    'Amarela',
    'Amarela e Preta',
    'Laranja e Branca',
    'Laranja',
    'Laranja e Preta',
    'Verde e Branca',
    'Verde',
    'Verde e Preta',
    'Azul',
    'Roxa',
    'Marrom',
    'Preta',
  ]
  const [showModal, setShowModal] = useState<boolean>(false)

  function handleSetVisibilityModal() {
    setShowModal(true)
  }

  return (
    <VStack flex={1} py={8} px={4} backgroundColor="gray.900">
      <Center>
        <Heading color="gray.100" fontFamily="heading" fontSize="2xl">
          Configuração de Faixas
        </Heading>
      </Center>
      <ScrollView flex={1} py={8}>
        {belts.map((belt, index) => {
          return (
            <Button
              key={index}
              w="full"
              backgroundColor="gray.400"
              mt={3}
              p={2}
              borderRadius={5}
              onPress={handleSetVisibilityModal}
            >
              <Text
                textAlign="center"
                color="white"
                fontWeight="semibold"
                fontSize={16}
              >
                {belt}
              </Text>
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
              Tempo mínimo na faixa X:
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              placeholder="Digite a quantidade em dias"
              w="full"
              backgroundColor="gray.900"
              p={3}
              borderRadius={5}
            />
          </Modal.Body>
          <Modal.Footer backgroundColor="gray.200">
            <Button.Group space={2}>
              <Button
                onPress={() => {
                  setShowModal(false)
                }}
                backgroundColor="green.500"
              >
                Salvar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </VStack>
  )
}
