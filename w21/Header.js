import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>WhatsApp</Text>
    <View style={styles.iconsContainer}>
      <MaterialIcons name="photo-camera" size={24} color="#c0c8cf" style={styles.icon} />
      <FontAwesome name="search" size={24} color="#c0c8cf" style={styles.icon} />
      <MaterialIcons name="more-vert" size={24} color="#c0c8cf" style={styles.icon} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e2b34',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    color: '#c0c8cf',
    fontSize: 20,
    fontWeight: 'normal',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 12,
  },
});

export default Header;
