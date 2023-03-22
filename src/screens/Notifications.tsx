import { useState } from 'react'
import { Center, VStack, Heading, ScrollView, Modal } from 'native-base'
import { NotificationItem } from '../components/NotificationItem'

type NotificationData = {
  id: number
  date: string
  description: string
  read: boolean
}

export function Notifications() {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [notifications, setNotifications] = useState<NotificationData[]>([
    {
      id: 1,
      date: '10/01/2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, itaque minus! Explicabo, temporibus sint facilis sequi   amet ullam labore maxime aspernatur doloribus earum fugiat laudantium aperiam quo nam aliquam commodi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, iste. Dolore, cupiditate modi doloribus odio ipsum itaque hic sit necessitatibus, ducimus, qui dolores! Praesentium quod commodi, repellendus ipsa eum esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptates doloribus voluptatibus possimus inventore molestias?',
      read: false,
    },
    {
      id: 2,
      date: '22/01/2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, itaque minus! Explicabo, temporibus sint facilis sequi   amet ullam labore maxime aspernatur doloribus earum fugiat laudantium aperiam quo nam aliquam commodi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, iste. Dolore, cupiditate modi doloribus odio ipsum itaque hic sit necessitatibus, ducimus, qui dolores! Praesentium quod commodi, repellendus ipsa eum esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptates doloribus voluptatibus possimus inventore molestias?',
      read: true,
    },
    {
      id: 3,
      date: '02/03/2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, itaque minus! Explicabo, temporibus sint facilis sequi   amet ullam labore maxime aspernatur doloribus earum fugiat laudantium aperiam quo nam aliquam commodi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, iste. Dolore, cupiditate modi doloribus odio ipsum itaque hic sit necessitatibus, ducimus, qui dolores! Praesentium quod commodi, repellendus ipsa eum esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptates doloribus voluptatibus possimus inventore molestias?',
      read: false,
    },
    {
      id: 4,
      date: '05/05/2023',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, itaque minus! Explicabo, temporibus sint facilis sequi   amet ullam labore maxime aspernatur doloribus earum fugiat laudantium aperiam quo nam aliquam commodi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, iste. Dolore, cupiditate modi doloribus odio ipsum itaque hic sit necessitatibus, ducimus, qui dolores! Praesentium quod commodi, repellendus ipsa eum esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptates doloribus voluptatibus possimus inventore molestias?',
      read: true,
    },
  ])
  const [notificationData, setNotificationData] = useState<NotificationData>(
    {} as NotificationData,
  )

  function handleSetModalVisibility(data?: NotificationData) {
    if (data) {
      setNotifications((oldValue) =>
        oldValue.map((item) =>
          item.id === data.id ? { ...item, read: true } : item,
        ),
      )
      setNotificationData(data)
    } else {
      setNotificationData({} as NotificationData)
    }

    setModalVisible((oldValue) => !oldValue)
  }

  return (
    <VStack flex={1} backgroundColor="gray.900" p={6}>
      <Center>
        <Heading color="gray.100" fontFamily="heading" fontSize="2xl">
          Notificações
        </Heading>
      </Center>

      <ScrollView flex={1} py={8}>
        {notifications.map((item) => (
          <NotificationItem
            key={item.id}
            data={item}
            onPressNotification={handleSetModalVisibility}
          />
        ))}
      </ScrollView>

      <Modal isOpen={modalVisible} onClose={handleSetModalVisibility}>
        <Modal.Content backgroundColor="gray.500">
          <Modal.CloseButton
            _icon={{ color: 'gray.100' }}
            _pressed={{ backgroundColor: 'gray.700' }}
          />
          <Modal.Header
            backgroundColor="gray.500"
            _text={{ color: 'gray.100' }}
          >
            {notificationData.date}
          </Modal.Header>
          <Modal.Body _text={{ color: 'gray.100', fontSize: 'md' }}>
            {notificationData.description}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </VStack>
  )
}
