import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

export default function Login({ navigation }) {
  const [name, setName] = useState('');

  const onPressLogin = () => {
    navigation.navigate('User', { name }); // Pass 'name' as a parameter to the 'User' screen
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require('../assets/Facebook-Logo-2019.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor="#999"
        onChangeText={setName} // Update 'name' state when text changes
        value={name} // Bind 'name' state to input value
      />
      <TouchableOpacity style={styles.button} onPress={onPressLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '70%',
    height: 150,
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4267B2',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
