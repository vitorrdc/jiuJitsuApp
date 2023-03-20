import { TouchableOpacity } from 'react-native'
import {
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
  Image,
  Box,
  Heading,
  Center,
  Stack,
  useTheme,
} from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from '../components/Button'

export function Home() {
  const { colors } = useTheme()
  return (
    <ScrollView
      flex={1}
      backgroundColor="gray.900"
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{
        p: 6,
      }}
    >
      <HStack justifyContent="space-between">
        <VStack>
          <Text color="gray.100" fontFamily="body" fontSize="lg">
            Bem-vindo,
          </Text>
          <Text color="gray.100" fontFamily="heading" fontSize="3xl">
            Vitinho
          </Text>
        </VStack>

        <TouchableOpacity>
          <Icon
            as={MaterialCommunityIcons}
            name="logout"
            size={8}
            color="gray.100"
          />
        </TouchableOpacity>
      </HStack>

      <VStack
        flex={1}
        alignItems="center"
        backgroundColor="gray.500"
        rounded="md"
        p={6}
        mt={8}
      >
        <Stack>
          <Image
            source={require('../assets/avatar.jpeg')}
            h={32}
            w={32}
            borderWidth={4}
            borderRadius="full"
            borderColor="blue.600"
            alt="Imagem do usuário"
          />
          <TouchableOpacity
            style={{
              height: 32,
              width: 32,
              borderRadius: 16,
              position: 'absolute',
              backgroundColor: colors.gray[100],
              alignItems: 'center',
              justifyContent: 'center',
              right: 4,
              bottom: 4,
            }}
          >
            <Icon
              as={MaterialCommunityIcons}
              name="camera-flip"
              size={5}
              color="gray.900"
            />
          </TouchableOpacity>
        </Stack>

        <HStack backgroundColor="blue.700" w="full" h={5} my={4}>
          <HStack position="absolute" right={10} h="full">
            <Box backgroundColor="white" h="full" w={2} />
            <Box backgroundColor="white" h="full" w={2} ml={2} />
            <Box backgroundColor="white" h="full" w={2} ml={2} />
            <Box backgroundColor="white" h="full" w={2} ml={2} />
          </HStack>
        </HStack>

        <Heading color="blue.700" fontFamily="heading">
          Faixa Azul
        </Heading>

        <Text color="gray.100" fontSize="md">
          10 aulas
        </Text>
        <Text color="gray.100" fontSize="md">
          Próxima graduação em <Text fontFamily="heading">60 aulas</Text>
        </Text>

        <VStack mt={8} w="full" alignItems="center">
          <Text color="gray.100" fontSize="md" fontFamily="heading" mb={2}>
            Hoje tem treino
          </Text>

          <Button title="Confirmar presença" variant="success" />
        </VStack>
      </VStack>

      <Center flexDirection="row" mt={8}>
        <TouchableOpacity style={{ marginHorizontal: 8 }}>
          <Icon
            as={MaterialCommunityIcons}
            name="instagram"
            size={8}
            color="gray.100"
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 8 }}>
          <Icon
            as={MaterialCommunityIcons}
            name="facebook"
            size={8}
            color="gray.100"
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 8 }}>
          <Icon
            as={MaterialCommunityIcons}
            name="whatsapp"
            size={8}
            color="gray.100"
          />
        </TouchableOpacity>
      </Center>
    </ScrollView>
  )
}
