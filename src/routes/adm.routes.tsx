import React, { useEffect, useState } from 'react'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import { User } from 'firebase/auth'

import { auth } from '../services/firebase'

import { Login } from '../screens/Login'
import { HomeAdmin } from '../screens/HomeAdmin'
import { AddNewUser } from '../screens/AddNewUser'
import { StudentList } from '../screens/StudentList'
import { EditStudent } from '../screens/EditStudent'
import { TrainningGrid } from '../screens/TrainningGrid'
import { AttendanceList } from '../screens/AttendanceList'
import { ConfirmAttendance } from '../screens/ConfirmAttendance'
import { BeltsConfiguration } from '../screens/BeltsConfiguration'
import { Icon, useTheme } from 'native-base'
import { Platform } from 'react-native'
import { LogOut } from '../components/LogOut'

export type AdmRoutesProps = {
  Login: undefined
  HomeAdmin: undefined
  NewUser: undefined
  StudentsList: undefined
  EditStudent: {
    studentId: string
  }
  ConfirmAttendance: undefined
  AttendanceList: undefined
  TrainingGrid: undefined
  BeltsConfiguration: undefined
  SignOut: undefined
}
export type AdmNavigatorRoutesProps = BottomTabNavigationProp<AdmRoutesProps>

const { Navigator, Screen } = createBottomTabNavigator<AdmRoutesProps>()

export function AdmRoutes() {
  const [userOn, setUserOn] = useState<User | null>(null)
  const { colors, sizes } = useTheme()
  const iconSize = sizes[2]

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUserOn(user)
    })
  }, [])

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.blue[600],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.gray[100],
          borderTopWidth: 0,
          height: Platform.OS === 'android' ? 'auto' : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6],
        },
      }}
      backBehavior="history"
      initialRouteName="Login"
    >
      {!userOn ? (
        <Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            tabBarStyle: {
              height: 0,
            },
          }}
        />
      ) : (
        <>
          <Screen
            name="HomeAdmin"
            component={HomeAdmin}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon as={Feather} name="home" size={iconSize} color={color} />
              ),
            }}
          />
          <Screen
            name="NewUser"
            component={AddNewUser}
            options={{ tabBarButton: () => null }}
          />
          <Screen
            name="StudentsList"
            component={StudentList}
            options={{
              tabBarButton: () => null,
              tabBarStyle: {
                display: 'none',
              },
            }}
          />
          <Screen
            name="EditStudent"
            component={EditStudent}
            options={{
              tabBarButton: () => null,
              tabBarStyle: {
                display: 'none',
              },
            }}
          />
          <Screen
            name="ConfirmAttendance"
            component={ConfirmAttendance}
            options={{ tabBarButton: () => null }}
          />
          <Screen
            name="AttendanceList"
            component={AttendanceList}
            options={{ tabBarButton: () => null }}
          />
          <Screen
            name="TrainingGrid"
            component={TrainningGrid}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon
                  as={Feather}
                  name="calendar"
                  size={iconSize}
                  color={color}
                />
              ),
            }}
          />
          <Screen
            name="BeltsConfiguration"
            component={BeltsConfiguration}
            options={{ tabBarButton: () => null }}
          />
          <Screen
            name="SignOut"
            component={LogOut}
            options={{
              tabBarIcon: () => {
                return (
                  <Icon
                    as={Feather}
                    name="log-out"
                    size={iconSize}
                    color={colors.red[600]}
                  />
                )
              },
            }}
          />
        </>
      )}
    </Navigator>
  )
}
