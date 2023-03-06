import { createDrawerNavigator } from '@react-navigation/drawer';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Login } from '../screens/Login';
import { auth } from '../services/firebase';
import { LogOut } from '../components/LogOut';
import { AddNewUser } from '../screens/AddNewUser';
import { StudentList } from '../screens/StudentList';
import { StudentEdit } from '../screens/StudentEdit';

const Drawer = createDrawerNavigator()


export function AdmRoutes() {

  const [userOn, setUserOn] = useState<User|null>(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserOn(user)
    })
  },[])

 return (
        <Drawer.Navigator 
          screenOptions={{
            drawerStyle: {
              backgroundColor:'#111111',
            },
            drawerActiveBackgroundColor: '#ffffff73',
            drawerInactiveBackgroundColor:'#96969684',
            drawerActiveTintColor: '#090909',
            drawerInactiveTintColor: '#090909',
            drawerLabelStyle: {
              fontSize: 18,
            },
            headerStyle: {
              height: 50,
              backgroundColor: '#0a0a0a',
              
            },
            headerTintColor: '#ffff',
            headerTransparent: false,
            headerTitle: 'Nome da Academia'
            
          }} 
          initialRouteName='Login'
        > 
          {
            (!userOn) && <Drawer.Screen 
              name='Login' 
              component={Login} 
              options={{
                headerShown: false
              }}
              />
          }
          {
            (userOn) && (<>
            <Drawer.Screen name='Criar novo Usuário'  component={AddNewUser} />
            <Drawer.Screen name='Lista de alunos'  component={StudentList} />
            <Drawer.Screen name='Editar Alunos'  component={StudentEdit} />
            <Drawer.Screen name='Sair'  component={LogOut} />
            

            </>)
          }
          </Drawer.Navigator>
        )
} 