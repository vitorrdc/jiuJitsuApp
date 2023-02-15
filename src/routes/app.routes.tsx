import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home'
import { New } from '../screens/New'

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
          <Drawer.Screen name='New' component={New} />
        </Drawer.Navigator>
        )
} 