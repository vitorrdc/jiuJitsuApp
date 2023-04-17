import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Login } from '../screens/Login'
import { auth } from '../services/firebase'
import { LogOut } from '../components/LogOut'
import { AddNewUser } from '../screens/AddNewUser'
import { StudentList } from '../screens/StudentList'
import { StudentEdit } from '../screens/StudentEdit'
import { ConfirmAttendance } from '../screens/ConfirmAttendance'
import { TrainningGrid } from '../screens/TrainningGrid'
import { AttendanceList } from '../screens/AttendanceList'
import { BeltsConfiguration } from '../screens/BeltsConfiguration'
import { NavigationContainer } from '@react-navigation/native'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

export function AdmRoutes() {
  const [userOn, setUserOn] = useState<User | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserOn(user)
    })
  }, [])

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#111111',
        },
        drawerActiveBackgroundColor: '#ffffff73',
        drawerInactiveBackgroundColor: '#96969684',
        drawerActiveTintColor: '#090909',
        drawerInactiveTintColor: '#090909',
        drawerLabelStyle: {
          fontSize: 18,
        },
        headerStyle: {
          backgroundColor: '#0a0a0a',
        },
        headerTintColor: '#ffff',
        headerTransparent: false,
        headerTitle: 'Nome da Academia',
      }}
      initialRouteName="Login"
    >
      {!userOn && (
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      )}
      {userOn && (
        <>
          <Drawer.Screen name="Criar novo Usuário" component={AddNewUser} />
          <Drawer.Screen name="Lista de alunos" component={StudentList} />
          <Drawer.Screen name="Editar Alunos" component={StudentEdit} />
          <Drawer.Screen
            name="Confirmar Presenças"
            component={ConfirmAttendance}
          />
          <Drawer.Screen
            name="Visualizar Presenças"
            component={AttendanceList}
          />
          <Drawer.Screen name="Grade de Treinos" component={TrainningGrid} />
          <Drawer.Screen
            name="Configuração de Faixas"
            component={BeltsConfiguration}
          />
          <Drawer.Screen name="Sair" component={LogOut} />
        </>
      )}
    </Drawer.Navigator>
  )
}
