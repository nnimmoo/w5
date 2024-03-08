import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView
import Chats from './screens/Chats';
import Calls from './screens/Calls';
import Updates from './screens/Updates';
import Contacts from './screens/Contacts';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const ContactsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Contacts"
      component={Contacts}
      options={{ headerShown: false }} // hide the header
    />
  </Stack.Navigator>
);

const ChatsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Chats"
      component={Chats}
      options={{ headerShown: false }} // hide the header
    />
  </Stack.Navigator>
);

const StatusStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Updates"
      component={Updates}
      options={{ headerShown: false }} // hide the header
    />
  </Stack.Navigator>
);

const CallsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Calls"
      component={Calls}
      options={{ headerShown: false }} // hide the header
    />
  </Stack.Navigator>
);

const AppNavigation = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#01a985',
          inactiveTintColor: '#c0c8cf',
          style: { backgroundColor: '#1e2b34' },
        }}>
        <Tab.Screen
          name="Contacts"
          component={ContactsStack}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-multiple" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen name="Chats" component={ChatsStack} />
        <Tab.Screen name="Updates" component={StatusStack} />
        <Tab.Screen name="Calls" component={CallsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default AppNavigation;
