import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import { Color } from '../color';
import { Image } from 'react-native';
import assets from '../assets';
import More from '../screens/More';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      headerTintColor: Color.White1, headerStyle: { shadowColor: 'transparent', backgroundColor: Color.Dark1 }, headerTitleAlign: 'center',
      tabBarActiveTintColor: Color.Main1,
      tabBarStyle: {
        backgroundColor: Color.Dark1
      }
    }}>
      <Tab.Screen options={{ tabBarIcon: (props) => <Image source={assets.home_icon} {...props} resizeMode='contain' style={{ width: props.size, height: props.size, tintColor: props.color }} /> }} name="Home" component={Home} />
      <Tab.Screen options={{ tabBarIcon: (props) => <Image source={assets.setting_icon} {...props} resizeMode='contain' style={{ width: props.size, height: props.size, tintColor: props.color }} /> }} name="More" component={More} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;