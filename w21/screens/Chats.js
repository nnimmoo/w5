import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ChatLog = ({ image, name,lastMsg, date }) => (
    <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{lastMsg}</Text>
        </View>
       <Text style={styles.date}>{date}</Text>
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


const Chats = () => {
  const callData = [
    { id: '1', image: 'https://placekitten.com/200/200', name: 'John Doe', date: '2024-03-08', lastMsg: 'Hello!' },
    { id: '2', image: 'https://placekitten.com/200/285', name: 'Jane Smith', date: '2024-03-07', lastMsg: 'Hi there!' },
    { id: '3', image: 'https://placekitten.com/200/210', name: 'Alice Johnson', date: '2024-03-06', lastMsg: 'How are you?' },
    { id: '4', image: 'https://placekitten.com/200/220', name: 'Bob Brown', date: '2024-03-05', lastMsg: 'Good morning!' },
    { id: '5', image: 'https://placekitten.com/200/230', name: 'Eva Wilson', date: '2024-03-04', lastMsg: 'Good evening!' },
    { id: '6', image: 'https://placekitten.com/200/240', name: 'Michael Davis', date: '2024-03-03', lastMsg: 'Hey!' },
    { id: '7', image: 'https://placekitten.com/200/255', name: 'Sophia Clark', date: '2024-03-02', lastMsg: 'Nice to meet you!' },
    { id: '8', image: 'https://placekitten.com/200/260', name: 'David Martinez', date: '2024-03-01', lastMsg: 'What\'s up?' },
  ];
  
  
    return (
      <View style={Callstyles.container}>
        <FlatList
          style={Callstyles.CallContainer}
          data={callData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ChatLog
              image={item.image}
              name={item.name}
              lastMsg={item.lastMsg}
              date={item.date}
            />
          )}
        />
        <TouchableOpacity style={Callstyles.button}>
          <MaterialIcons name="message" size={24} color="#121b22" />
        </TouchableOpacity>
      </View>
    );
  };
  
  const Callstyles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor:"#121b22"
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

export default Chats;