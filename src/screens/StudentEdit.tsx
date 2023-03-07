import {View, Text, Alert, TouchableOpacity} from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import SelectDropdown from 'react-native-select-dropdown'
import Modal from "react-native-modal"
import { useState } from 'react'
import { BackButton } from '../components/BackButton'


export function StudentEdit() {

  const belts = ['Branca', 'Azul', 'Roxa', 'Marrom', 'Preta']
  const degree = ['1 grau', '2 graus', '3 graus', '4 graus']
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  function toggleModal() {
    setIsVisibleModal(!isVisibleModal)
  }

  return (
    <View className='flex-1 bg-background'>
      <ScrollView className='p-4'>
        <View className='flex-row items-center justify-center'>
          <View className='absolute left-0'>
            <BackButton />
          </View>
          <Text className='text-white font-bold text-xl text-center'>Editar Aluno</Text>
        </View>
        <View className='bg-zinc-600 w-full px-2 py-6 rounded-lg mt-8'>
          <Text className='text-white mb-1 ml-2'>
            Nome
          </Text>
          <TextInput 
            className='w-full bg-background h-10 rounded-lg mb-3 border border-zinc-400'
          />
          <Text className='text-white ml-2 mb-1'>
            Faixa
          </Text>
          <SelectDropdown
            data={belts}
            buttonStyle={{
              backgroundColor:'black',
              borderColor: '#9ea29b',
              borderStyle: 'solid',
              borderRadius: 10,
              borderWidth: 1,
              width: '100%',
              height: 40
            }}
            buttonTextStyle={{
              color: 'white',
              fontSize: 15,
            }}
            dropdownStyle={{
              backgroundColor: 'gray',
              borderRadius: 10,
            }}
            
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
              Alert.alert('Trocou a faixa', 'Você acabou de alterar a cor da faixa do aluno')
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
          <Text className='text-white ml-2 mb-1 mt-3'>
            Graus
          </Text>
          <SelectDropdown
            data={degree}
            buttonStyle={{
              backgroundColor:'black',
              borderColor: '#9ea29b',
              borderStyle: 'solid',
              borderRadius: 10,
              borderWidth: 1,
              width: '100%',
              height: 40
            }}
            buttonTextStyle={{
              color: 'white',
              fontSize: 15,
            }}
            dropdownStyle={{
              backgroundColor: 'gray',
              borderRadius: 10,
            }}
            
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
              Alert.alert('Mudou os graus', 'Você acabou de alterar os graus da faixa do aluno')
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          />
        </View>
        <TouchableOpacity 
          className='bg-green-500 rounded-lg p-2 mt-4'
          activeOpacity={0.9}
          onPress={toggleModal}
        >
          <Text className='text-white text-center text-xl font-semibold'>
            + Evento
          </Text>
        </TouchableOpacity>
        <Modal isVisible={isVisibleModal}>
          <View className='flex-1 items-center justify-center'>
            <View className='bg-zinc-500 w-72 h-72 items-center justify-center p-4 rounded-lg border border-zinc-300'>
              <Text className='text-white font-semibold text-lg mb-6'>
                Adicione um Evento
              </Text>
              <TextInput 
                placeholder='Digite a data'
                placeholderTextColor='gray'
                className='w-full h-10 bg-background border border-zinc-300 rounded-lg px-2 mb-4'
              />
               <TextInput 
                placeholder='Curta descrição do evento'
                placeholderTextColor='gray'
                className='w-full h-10 bg-background border border-zinc-300 rounded-lg px-2 mb-4'
              />
              <TouchableOpacity 
                onPress={toggleModal}
                className='bg-green-500 w-full h-10 rounded-lg justify-center'
                activeOpacity={0.9}
              >
                <Text className='text-white text-center font-semibold'>Salvar evento</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View className="h-auto w-full pb-4 mt-6">
          <View className="flex-row items-center justify-around mt-4">
            <Text className="text-white text-base">
              10/01/2019
            </Text>
            <View
              className="w-6 h-6 rounded-full bg-zinc-600"
            />
            <View className="w-40 h-10 bg-white rounded-lg flex items-center justify-center">
              <Text className="text-lg">
                Matrícula
              </Text>
            </View>
          </View>
          <View className="flex-row items-center justify-around mt-4">
            <Text className="text-white text-base">
              27/05/2019
            </Text>
            <View
              className="w-6 h-6 rounded-full bg-zinc-600"
            />
            <View className="w-40 h-10 bg-white rounded-lg flex items-center justify-center">
              <Text className="text-lg">
                Ganhou 1 grau
              </Text>
            </View>
          </View> 
        </View>
      </ScrollView>
    </View>
  )
}