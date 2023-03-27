import {
  ScrollView,
  Center,
  Button,
  Modal,
  FormControl,
  Input,
  Stack,
  Checkbox,
  Text,
  VStack,
} from 'native-base'
import { useState } from 'react'

type NewGridData = {
  time: string
  weekDays: string[]
}

export function TrainningGrid() {
  const [showModal, setShowModal] = useState(false)
  const [newTime, setNewTime] = useState<string>('')
  const [weekDaysCheckbox, setWeekDaysCheckbox] = useState<string[]>([])
  const [newGridData, setNewGridData] = useState<NewGridData[]>([
    {
      time: '18:15h às 19:30h',
      weekDays: ['seg ', 'qua ', 'sex '],
    },
  ])
  const weekDays: string[] = [
    'seg ',
    'ter ',
    'qua ',
    'qui ',
    'sex ',
    'sab ',
    'dom ',
  ]

  function handleNewGridData() {
    setShowModal(false)
    setNewGridData([
      ...newGridData,
      {
        time: newTime,
        weekDays: weekDaysCheckbox,
      },
    ])
  }

  console.log(newGridData)

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      backgroundColor="gray.900"
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <VStack p={6}>
        <Center>
          <Button onPress={() => setShowModal(true)} backgroundColor="blue.500">
            Criar novo horário
          </Button>

          <Text color="white" fontWeight="bold" fontSize="2xl" mt={6}>
            Horários existentes
          </Text>

          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content maxWidth="400px">
              <Modal.CloseButton />
              <Modal.Header>Criar novo horário</Modal.Header>
              <Modal.Body>
                <FormControl>
                  <FormControl.Label>Horário</FormControl.Label>
                  <Input onChangeText={setNewTime} />
                </FormControl>
                <FormControl>
                  <FormControl.Label>Selecione os dias</FormControl.Label>
                  <Stack
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                  >
                    {weekDays.map((day: string, index: number) => {
                      return (
                        <Checkbox.Group
                          key={index}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          onChange={setWeekDaysCheckbox}
                          value={weekDaysCheckbox}
                          accessibilityLabel="choose numbers"
                        >
                          <Text mb="6px">{day}</Text>
                          <Checkbox
                            value={day}
                            colorScheme="green"
                            my={weekDays.length}
                          />
                        </Checkbox.Group>
                      )
                    })}
                  </Stack>
                </FormControl>
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
                  <Button onPress={handleNewGridData}>Save</Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </Center>
        {newGridData.map((element: NewGridData, index: number) => {
          return (
            <Stack
              key={index}
              backgroundColor="gray.400"
              display="flex"
              borderRadius="lg"
              p={2}
              mt={10}
            >
              <Stack backgroundColor="gray.900" borderRadius="lg" py={2}>
                <Text textAlign="center" color="white">
                  {element.time}
                </Text>
              </Stack>
              <Text color="white" fontWeight="bold" textAlign="center" m={2}>
                {element.weekDays}
              </Text>
            </Stack>
          )
        })}
      </VStack>
    </ScrollView>
  )
}
