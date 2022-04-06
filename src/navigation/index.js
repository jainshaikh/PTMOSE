import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashOneScreen from '../screens/SplashOneScreen/SplashOneScreen';
import SplashTwoScreen from '../screens/SplashTwoScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassScreen from '../screens/ForgotPassScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import CreatePassScreen from '../screens/CreatePassScreen';
import SideMenuScreen from '../screens/SideMenu/SideMenuScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import WineryProfileScreen from '../screens/WineryProfileScreen';



const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='SplashOneScreen' component={SplashOneScreen} />
          <Stack.Screen name='SplashTwoScreen' component={SplashTwoScreen} />
          <Stack.Screen name='SignInScreen' component={SignInScreen} />
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
          <Stack.Screen name='ForgotPassScreen' component={ForgotPassScreen} />
          <Stack.Screen name='OnBoardingScreen' component={OnBoardingScreen} />
          <Stack.Screen name='CreatePassScreen' component={CreatePassScreen} /> 
          <Stack.Screen name='SideMenuScreen' component={SideMenuScreen} />
          <Stack.Screen name='UserProfileScreen' component={UserProfileScreen} />
          <Stack.Screen name='WineryProfileScreen' component={WineryProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;


