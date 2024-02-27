import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer() {
    const [selectedButton, setSelectedButton] = useState(null);

    const onPressButton = (buttonName) => {
        setSelectedButton(buttonName);
        // You can define additional behavior for each button here
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => onPressButton("home")} style={styles.button}>
                <Ionicons name={selectedButton === "home" ? "home" : "home-outline"} size={24} color={selectedButton === "home" ? "blue" : "black"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onPressButton("user")} style={styles.button}>
                <Ionicons name={selectedButton === "user" ? "person" : "person-outline"} size={24} color={selectedButton === "user" ? "blue" : "black"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onPressButton("manyUsers")} style={styles.button}>
                <Ionicons name={selectedButton === "manyUsers" ? "people" : "people-outline"} size={24} color={selectedButton === "manyUsers" ? "blue" : "black"} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onPressButton("bell")} style={styles.button}>
                <Ionicons name={selectedButton === "bell" ? "notifications" : "notifications-outline"} size={24} color={selectedButton === "bell" ? "blue" : "black"} />
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
        borderTopWidth: 1,
        height: 50,
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 30,
        padding: 10,
    },
});
