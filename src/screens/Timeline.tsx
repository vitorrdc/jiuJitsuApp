import {
  HStack,
  VStack,
  Text,
  Heading,
  Center,
  ScrollView,
  Box,
} from 'native-base'

const timeline = [
  { date: '10/01/2023', faixa: null, title: 'Matrícula' },
  { date: '10/01/2023', faixa: null, title: 'Matrícula' },
  { date: '10/01/2023', faixa: null, title: 'Matrícula' },
  { date: '10/01/2023', faixa: null, title: 'Matrícula' },
  { date: '10/01/2023', faixa: null, title: 'Matrícula' },
]

export function Timeline() {
  return (
    <VStack flex={1} backgroundColor="gray.900" p={6}>
      <Center my={4}>
        <Heading color="gray.100" fontFamily="heading" fontSize="2xl">
          Minha Linha do Tempo
        </Heading>
      </Center>

      <ScrollView
        showsVerticalScrollIndicator={false}
        backgroundColor="gray.500"
        p={6}
        rounded="md"
        flex="inherit-"
      >
        {timeline.map((item, index) => (
          <VStack key={String(index)} minH={24} maxH={24}>
            {index !== 0 && (
              <Center backgroundColor="error.500" mt={1}>
                <Box
                  w={1}
                  h={16}
                  backgroundColor="gray.900"
                  position="absolute"
                />
              </Center>
            )}
            <HStack alignItems="center" justifyContent="space-between">
              <Text color="gray.100" fontSize="md" fontFamily="heading">
                {item.date}
              </Text>

              <Center position="absolute" w="full">
                <Box backgroundColor="gray.900" h={8} w={8} rounded="full" />
              </Center>

              <Center backgroundColor="white" rounded="md" p={2} maxW="40%">
                <Text textAlign="center" numberOfLines={2}>
                  {item.title}
                </Text>
              </Center>
            </HStack>
            {index < timeline.length - 1 && (
              <Center backgroundColor="error.500" mt={1}>
                <Box
                  w={1}
                  h={16}
                  backgroundColor="gray.900"
                  position="absolute"
                />
              </Center>
            )}
          </VStack>
        ))}
      </ScrollView>
    </VStack>
  )
}
