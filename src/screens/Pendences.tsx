import { VStack, Text, Box, Center, Image } from 'native-base'
import { useState } from 'react'
import { SocialMediaButtons } from '../components/SocialMediaButtons'

export function Pendences() {
  const [pendence] = useState(false)

  return (
    <VStack flex={1} backgroundColor="gray.900" p={6} alignItems="center">
      <Text color="gray.100" fontFamily="heading" fontSize="2xl" mb={8}>
        Pendências e Bloqueios
      </Text>

      {pendence ? (
        <>
          <Center backgroundColor="gray.500" p={6} rounded="md" mb={6}>
            <Box backgroundColor="red.500" p={2} rounded="md">
              <Text
                color="gray.800"
                fontSize="lg"
                textAlign="center"
                fontFamily="heading"
              >
                Você possui débitos em atraso. Entrar em contato com o professor
                e/ou responsável.
              </Text>
            </Box>
          </Center>

          <SocialMediaButtons />
        </>
      ) : (
        <Center>
          <Image
            source={require('../assets/relaxok.png')}
            alt="Imagem de um sapo relaxando"
          />
          <Box backgroundColor="gray.500" p={4} rounded="md" mt={6}>
            <Text color="gray.100" fontFamily="heading" fontSize="lg">
              Você não possui pendências!
            </Text>
          </Box>
        </Center>
      )}
    </VStack>
  )
}
