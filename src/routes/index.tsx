import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../views/Home'
import Game from '../views/Game'
import Feedback from '../views/Feedback'

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            animation: 'slide_from_right',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            animation: 'slide_from_right',
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{
            animation: 'slide_from_right',
            headerBackVisible: false,
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
