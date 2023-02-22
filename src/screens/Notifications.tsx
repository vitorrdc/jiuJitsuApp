import {View, Text, Modal, TouchableOpacity, Pressable, Alert} from "react-native";
import { BackButton } from "../components/BackButton";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

export function Notifications() {

  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [seenMessage, setSeenMessage] = useState<boolean>(false)

  return (
    <View className="flex-1 bg-background px-6 pt-8" >
      <View>
        <BackButton />
      </View>
      <Text className="text-white font-bold mx-auto text-2xl">
        Notificações
      </Text>
      <View className="bg-zinc-800 h-auto w-80 pb-4 rounded-lg py-4 mt-8">
        <ScrollView>
          <View className="flex-row justify-around items-center">
            <Text className="text-white font-semibold text-base">
              10/01/2023
            </Text>
            <View>
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);}}
              >
              <View className="w-12 h-12 flex-1 items-center justify-center">
                <View className="bg-zinc-700 rounded-lg h-auto w-80 ml-80 flex p-4  items-center">
                  <Text className="text-white font-regular text-lg text-justify">
                    Boa tarde galera, seguinte: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aspernatur facilis repellendus, saepe officia placeat. Impedit rerum sint eius illum deserunt reprehenderit nisi cumque quaerat iure, quos, saepe similique modi.
                  </Text>
                  <TouchableOpacity
                    className="h-8 w-20  bg-background mt-10 flex rounded-lg items-center justify-center"
                    onPress={() => setModalVisible(!modalVisible)}
                    activeOpacity={0.7}
                  >
                    <Text 
                      className="text-white text-base"
                    >
                      Fechar
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              </Modal>
              <TouchableOpacity
                className="bg-zinc-600 p-2 h-16 w-48 rounded-lg flex items-center justify-center"
                activeOpacity={0.7}
                onPress={() => setModalVisible(true)}
              >
                <Text 
                  className="text-white"
                >
                  Boa tarde galera, seguin...
                </Text>
              </TouchableOpacity>
            </View>  
          </View>
        </ScrollView>
      </View>
    </View>
  )
}