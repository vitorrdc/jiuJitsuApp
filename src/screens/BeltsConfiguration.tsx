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

type BeltsData = {
  faixa: string
  qtdade_aulas: string
}

export function BeltsConfiguration() {
  const [belts, setBelts] = useState<BeltsData[]>([
    {
      faixa: 'Branca',
      qtdade_aulas: '50',
    },
    {
      faixa: 'Cinza e Branca',
      qtdade_aulas: '55',
    },
    {
      faixa: 'Cinza',
      qtdade_aulas: '60',
    },
    {
      faixa: 'Cinza e Preta',
      qtdade_aulas: '65',
    },
    {
      faixa: 'Amarela e Branca',
      qtdade_aulas: '70',
    },
    {
      faixa: 'Amarela',
      qtdade_aulas: '75',
    },
    {
      faixa: 'Amarela e Preta',
      qtdade_aulas: '80',
    },
    {
      faixa: 'Laranja e Branca',
      qtdade_aulas: '80',
    },
    {
      faixa: 'Laranja',
      qtdade_aulas: '85',
    },
    {
      faixa: 'Laranja e Preta',
      qtdade_aulas: '90',
    },
    {
      faixa: 'Verde e Branca',
      qtdade_aulas: '95',
    },
    {
      faixa: 'Verde',
      qtdade_aulas: '100',
    },
    {
      faixa: 'Verde e Preta',
      qtdade_aulas: '105',
    },
    {
      faixa: 'Azul',
      qtdade_aulas: '110',
    },
    {
      faixa: 'Roxa',
      qtdade_aulas: '120',
    },
    {
      faixa: 'Marrom',
      qtdade_aulas: '130',
    },
    {
      faixa: 'Preta',
      qtdade_aulas: 'n/a',
    },
  ])
  const [showModal, setShowModal] = useState<boolean>(false)
  const [beltData, setBeltData] = useState<BeltsData>({} as BeltsData)

  function handleSetVisibilityModal(belt?: BeltsData | any) {
    setShowModal(true)
    setBeltData(belt)
  }

  return (
    <VStack flex={1} py={8} px={4} backgroundColor="gray.900">
      <Center>
        <Heading color="gray.100" fontFamily="heading" fontSize="2xl" mb={4}>
          Configuração de Faixas
        </Heading>
      </Center>
      <ScrollView flex={1} paddingBottom={100}>
        {belts.map((belt: BeltsData, index: number) => {
          return (
            <Button
              key={index}
              w="full"
              backgroundColor="gray.400"
              mt={3}
              p={2}
              borderRadius={5}
              onPress={() => handleSetVisibilityModal(belt)}
            >
              <Text
                textAlign="center"
                color="white"
                fontWeight="semibold"
                fontSize={16}
              >
                {belt.faixa}
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
            <Text fontWeight="bold" fontSize="lg" textAlign="center">
              Faixa {beltData.faixa}:
            </Text>
          </Modal.Header>
          <Modal.Body px={4}>
            <Stack mb={10}>
              <Text fontSize={20} fontWeight="bold" textAlign="center">
                Atual: {beltData.qtdade_aulas} aulas
              </Text>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Text fontWeight="bold" mr={2}>
                Novo:
              </Text>
              <Input
                placeholder="Qtd em aulas"
                backgroundColor="gray.300"
                placeholderTextColor="white"
                px={3}
                borderRadius={5}
                w={40}
              />
            </Stack>
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
