import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Components from './src/sreeen/logout'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './src/sreeen/home'
import Signinscreen from './src/sreeen/signin'
import Signupscreen from './src/sreeen/signup'
import Logoutscreen from './src/sreeen/logout'
import Spalshscreen from './src/sreeen/spalsh'


const Stack = createNativeStackNavigator();
const Welcome = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Spalshscreen} />
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Signin" component={Signinscreen} />
        <Stack.Screen name="Signup" component={Signupscreen} />
        <Stack.Screen name="Logout" component={Logoutscreen} />
      </Stack.Navigator>
    </NavigationContainer>


  )
}


export default Welcome;
