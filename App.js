import 'react-native-gesture-handler';

import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './Screens/Home';
import PlantScreen from './Screens/Plant';
import MoreScreen from './Screens/More';
import ResultScreen from './Screens/Result';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home Page' }}
      />
    </Stack.Navigator>
  );
}

function PlantStack() {
  return (
    <Stack.Navigator
      initialRouteName="Plant"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="Plant"
        component={PlantScreen}
        options={{ title: 'Plant Page' }}
      />

    </Stack.Navigator>
  );
}
function MoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}>
      <Stack.Screen
        name="More"
        component={MoreScreen}
        options={{ title: 'More Page' }}
      />

    </Stack.Navigator>
  )
}

function ResultStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Result"
        component={ResultScreen}
        options={{ title: 'Result page' }}
      />
    </Stack.Navigator>
  )
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#F60101',
          inactiveTintColor: '#207080'
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Plant"
          component={PlantStack}
          options={{
            tabBarLabel: 'Plant',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="grid-large" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Result"
          component={ResultStack}
          options={{
            tabBarLabel: "Result",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreStack}
          options={{
            tabBarLabel: 'More',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cog-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
