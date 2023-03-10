import { View, Text, Button } from 'react-native'
import { BackButton } from '../components/BackButton'
import { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function ToSchedule() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedClass, setSelectedClass] = useState<boolean>(false)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: any) => {
    setSelectedDate(date)
    hideDatePicker()
  }

  const handleConfirmClass = () => {
    selectedClass ? setSelectedClass(false) : setSelectedClass(true)
  }

  return (
    <View className="flex-1 bg-background">
      <View className="mt-6 ml-4">
        <BackButton />
      </View>
      <View className="flex-1 px-8  items-center">
        <Text className="text-white font-bold text-xl">Agenda de aulas</Text>
        <View className="bg-zinc-800 h-auto pb-10 w-80 mt-8 rounded-lg flex">
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
        </View>
        <View className="mt-6">
          <Button title="Agendar data futura" onPress={showDatePicker} />
          <DateTimePickerModal
            date={selectedDate}
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            buttonTextColorIOS="white"
          />
        </View>
      </View>
    </View>
  )
}
