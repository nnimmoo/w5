import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ChatsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Chats Screen</Text>
  </View>
);

const StatusScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Status Screen</Text>
  </View>
);

const CallsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Calls Screen</Text>
  </View>
);

const ChatsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ChatsMain" component={ChatsScreen} />
  </Stack.Navigator>
);

const StatusStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="StatusMain" component={StatusScreen} />
  </Stack.Navigator>
);

const CallsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="CallsMain" component={CallsScreen} />
  </Stack.Navigator>
);

const AppNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={ChatsStack} />
      <Tab.Screen name="Status" component={StatusStack} />
      <Tab.Screen name="Calls" component={CallsStack} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
