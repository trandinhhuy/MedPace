import React  from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import PlantScreen from '../screens/Plant/Plant'
import { Color } from '../color';
import { Image } from 'react-native';
import assets from '../assets';
import ResultScreen from '../screens/Result/Result';
const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ 
        headerShown: false,
        headerTintColor: Color.White1, headerStyle:{shadowColor: 'transparent',  backgroundColor: Color.Dark1,  }, 
        tabBarActiveTintColor: Color.Main1,
        tabBarStyle:{
          backgroundColor: Color.Dark1,
          paddingTop: 10
        },
     }}>
      <Tab.Screen options={{tabBarIcon: (props) => <Image source={assets.home_icon} {...props} resizeMode='contain' style={{width: props.size, height:props.size, tintColor: props.color}} />}} name="Home" component={Home} />
      <Tab.Screen options={{tabBarIcon: (props) => <Image source={assets.target_icon}{...props} resizeMode='contain' style={{width: props.size, height:props.size, tintColor: props.color}} />}} name="Target" component={PlantScreen}/>
      <Tab.Screen options={{tabBarIcon: (props) => <Image source={assets.result_icon}{...props} resizeMode='contain' style={{width: props.size, height:props.size, tintColor: props.color}} />}} name="Result" component={ResultScreen}/>
      <Tab.Screen options={{tabBarIcon: (props) => <Image source={assets.setting_icon} {...props} resizeMode='contain' style={{width: props.size, height:props.size, tintColor: props.color}} />}} name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;