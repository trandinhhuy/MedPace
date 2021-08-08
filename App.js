/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Question from './src/screens/Questions';
import { StatusBar } from 'react-native';
import { Color } from './src/color';
import BottomTabNavigation from './src/navigations/BottomTabNavigation';
import Profile from './src/screens/Profile';


const Stack = createStackNavigator();

const App = () => {
  return (
    <>
     <StatusBar barStyle='light-content'></StatusBar>
      <NavigationContainer>
     
      <Stack.Navigator initialRouteName='Questions' screenOptions={{headerMode:"screen", headerTintColor: Color.White1, headerStyle:{shadowColor: 'transparent', backgroundColor: Color.Dark1 }}} >
        <Stack.Screen name='Questions' component={Question} />
        <Stack.Screen options={{headerShown:false}} name='BottomTabNavigation' component={BottomTabNavigation} />
        <Stack.Screen options={{headerShown: false}} name='Profile' component = {Profile}/>

      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
