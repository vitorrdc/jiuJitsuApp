import { View, Button } from 'react-native'
import { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView, VStack, Text, Box } from 'native-base'

export function ToSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedClass, setSelectedClass] = useState<boolean>(false)

  const handleConfirmClass = () => {
    selectedClass ? setSelectedClass(false) : setSelectedClass(true)
  }

  return (
    <VStack flex={1} backgroundColor="gray.900" p={6} alignItems="center">
      <Text fontSize="2xl" color="gray.100" fontFamily="heading">
        Agenda de aulas
      </Text>

      <ScrollView flex={1}>
        <Box backgroundColor="gray.500" p={6} rounded="md">
          <Text className="text-white font-semibold text-xl mt-2 ml-auto mr-auto">
            {selectedDate
              ? selectedDate.toLocaleDateString()
              : 'No date selected'}
          </Text>
          <View className="flex-row justify-around">
            <View className="bg-background w-40 h-10 rounded-lg flex items-center justify-center mt-4">
              <Text className="text-white">18h15: às 19h30</Text>
            </View>
            <TouchableOpacity
              className={
                selectedClass
                  ? 'bg-green-500 h-10 w-28 flex items-center justify-center rounded-lg mt-4'
                  : 'bg-blue-500 h-10 w-28 flex items-center justify-center rounded-lg mt-4'
              }
              activeOpacity={0.85}
              onPress={handleConfirmClass}
            >
              <Text className="text-white font-semibold">
                {selectedClass ? 'Confirmar' : 'Confirmado'}
              </Text>
            </TouchableOpacity>
          </View>
        </Box>
      </ScrollView>
    </VStack>
  )
}
