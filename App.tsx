
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';

// Importar las pantallas
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import RegistroScreen from './screens/RegistroScreen';
import Pantalla2 from './screens/Pantalla2';
import Pantalla3 from './screens/Pantalla3';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='Pantalla3' component={Pantalla3} />
        <Stack.Screen name='RegistroScreen' component={RegistroScreen} />
        <Stack.Screen name="Home" component={MyTabs} options={{ headerShown: false }} />


      </Stack.Navigator>


    </NavigationContainer>

  );
};

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Login'>
      <Tab.Screen name="Inicio" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./screens/images/home-64.png')} // Ruta de la imagen en tu proyecto
              style={{ width: size, height: size }}
            />
          )
        }}
      />
      <Tab.Screen name="Reseñas" component={Pantalla2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./screens/images/reseñas.png')} // Ruta de la imagen en tu proyecto
              style={{ width: 30, height: 35 }}
            />
          )
        }} />
      <Stack.Screen name='Tienda' component={Pantalla3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./screens/images/store.png')} // Ruta de la imagen en tu proyecto
              style={{ width: 30, height: 30 }}
            />
          )
        }} />

    </Tab.Navigator>
  )
}

export default App;


/*
import * as React from 'react';
import { Text, View } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import Pantalla2 from './screens/Pantalla2';




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <AntDesign name="stepforward" size={24} color="black" />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="Pantalla2" component={Pantalla2} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
*/
/*<Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="HomeScreen" component={HomeScreen} />
       <Stack.Screen name="RegistroScreen" component={RegistroScreen} />
       <Stack.Screen name=" Pantalla2" component={ Pantalla2} />
       <Stack.Screen name=" Pantalla3" component={ Pantalla3} />
       */