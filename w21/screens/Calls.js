import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CallLog = ({ image, name, date }) => (
    <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
        <MaterialIcons name="call" size={24} color="#01a985" style={styles.callIcon} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#121b22'
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        color: "#c0c8cf",
        backgroundColor: '#121b22',
        fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
        color: '#888',
    },
    callIcon: {
        marginLeft: 'auto',
    },
    CallContainer: {
        backgroundColor: '#121b22'
    }
});


const Calls = () => {
    const callData = [
      { id: '1', image: 'https://placekitten.com/200/200', name: 'John Doe', date: '2024-03-08, 15:03' },
      { id: '2', image: 'https://placekitten.com/200/285', name: 'Jane Smith', date: '2024-03-07, 23:45' },
      { id: '3', image: 'https://placekitten.com/200/210', name: 'Alice Johnson', date: '2024-03-06, 09:30' },
      { id: '4', image: 'https://placekitten.com/200/220', name: 'Bob Brown', date: '2024-03-05, 18:15' },
      { id: '5', image: 'https://placekitten.com/200/230', name: 'Eva Wilson', date: '2024-03-04, 11:20' },
      { id: '6', image: 'https://placekitten.com/200/240', name: 'Michael Davis', date: '2024-03-03, 07:55' },
      { id: '7', image: 'https://placekitten.com/200/255', name: 'Sophia Clark', date: '2024-03-02, 14:10' },
      { id: '8', image: 'https://placekitten.com/200/260', name: 'David Martinez', date: '2024-03-01, 20:45' },
      { id: '9', image: 'https://placekitten.com/200/270', name: 'Emma Rodriguez', date: '2024-02-29, 12:30' },
      { id: '10', image: 'https://placekitten.com/200/280', name: 'Oliver Lopez', date: '2024-02-28, 17:00' },
    ];
  
    return (
      <View style={Callstyles.container}>
        <FlatList
          style={Callstyles.CallContainer}
          data={callData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CallLog
              image={item.image}
              name={item.name}
              date={item.date}
            />
          )}
        />
        <TouchableOpacity style={Callstyles.button}>
          <MaterialIcons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
  };
  
  const Callstyles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    CallContainer: {
      flex: 1,
    },
    button: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      backgroundColor: '#01a985',
      width: 50,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Calls;