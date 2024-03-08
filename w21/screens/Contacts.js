import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';

const Contacts = () => (
  <View style={styles.container}>
<SvgUri
      width="200"
      height="200"
      uri={require('../assets/amico.svg')}
      style={styles.image}
    />
    <Text style={styles.text}>Communities bring members together in topic-based groups, and make it easy to get admin  announcements. Any community you're added to will appear here.</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Start your community</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121b22', 
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 20,
    color: '#c0c8cf',
    textAlign: 'center',
    paddingHorizontal: 20, 
    lineHeight: 20,
  },
  
  
  button: {
    backgroundColor: '#01a985', 
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  buttonText: {
    color: '#121b22', 
    fontSize: 14,
  },
});

export default Contacts;
