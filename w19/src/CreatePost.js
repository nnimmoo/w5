import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CreatePost() {
    const [postText, setPostText] = useState('');

    const handlePost = () => {
        // Here you can implement the logic to handle the post, such as sending it to a server
        console.log('Posted:', postText);
        // Clear the input after posting
        setPostText('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="What's on your mind?"
                placeholderTextColor="#999"
                value={postText}
                onChangeText={setPostText}
                multiline
            />
            <TouchableOpacity style={styles.button} onPress={handlePost}>
                <Ionicons name="add-circle-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: '100%',
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        height: 50,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 30,
        padding: 10,
    },
});
