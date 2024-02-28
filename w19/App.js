import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from './screens/User';
import Login from './screens/Login';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen  options={{ headerShown: false }} name="User" component={User} />
        <Stack.Screen  options={{ headerShown: false }} name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;