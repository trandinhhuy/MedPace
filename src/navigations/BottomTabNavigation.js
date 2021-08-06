import React  from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import { Color } from '../color';
import { Image } from 'react-native';
import assets from '../assets';
const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ 
        headerTintColor: Color.White1, headerStyle:{shadowColor: 'transparent',  backgroundColor: Color.Dark1,  }, 
        tabBarActiveTintColor: Color.Main1,
        tabBarStyle:{
          backgroundColor: Color.Dark1
        }
     }}>
      <Tab.Screen options={{tabBarIcon: (props) => <Image source={assets.home_icon} {...props} resizeMode='contain' style={{width: props.size, height:props.size, tintColor: props.color}} />}} name="Home" component={Home} />
      <Tab.Screen options={{tabBarIcon: (props) => <Image source={assets.setting_icon} {...props} resizeMode='contain' style={{width: props.size, height:props.size, tintColor: props.color}} />}} name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;