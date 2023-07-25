import { HStack, ScrollView, Text, VStack } from 'native-base'
import { CardNavigator } from '../components/CardNavigator'

export function HomeAdmin() {
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
            Nome do professor
          </Text>
        </VStack>
      </HStack>

      <VStack mt={6}>
        <CardNavigator
          title="Grade de Treinos"
          subtitle="Veja a grade de treinos dessa semana"
          goTo="TrainingGrid"
        />
        <CardNavigator
          title="Lista de Alunos"
          subtitle="Gerencie seus alunos"
          goTo="StudentsList"
        />
        <CardNavigator
          title="Lista de Presença"
          subtitle="Ao fim de cada treino, confirme as presenças"
          goTo="ConfirmAttendance"
        />
      </VStack>
    </ScrollView>
  )
}
