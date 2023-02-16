import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home'
import { Notifications } from '../screens/Notifications';
import { Pendences } from '../screens/Pendences';
import { Timeline } from '../screens/Timeline';
import { ToSchedule } from '../screens/ToSchedule';
import { TrocarFoto } from '../screens/TrocarFoto'

const Drawer = createDrawerNavigator()

export function AppRoutes() {
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
            headerTitle: 'Ryan Gracie Team'
            
          }} 
          initialRouteName='Home'
        >
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='Trocar foto de perfil' component={TrocarFoto} />
          <Drawer.Screen name='Agenda de aula' component={ToSchedule} />
          <Drawer.Screen name='Minha evolução' component={Timeline} />
          <Drawer.Screen name='Comunicados e avisos' component={Notifications} />
          <Drawer.Screen name='Pendências e bloqueio' component={Pendences} />
        </Drawer.Navigator>
        
        )
} 