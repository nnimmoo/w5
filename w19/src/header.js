import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({ name }) {
    const navigation = useNavigation(); // Hook to access navigation properties

    const onPressGoBack = () => {
        navigation.goBack(); // Go back when the button is pressed
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPressGoBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View>
                <Text style={styles.title}>{name}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
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
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        height: 70,
        paddingTop: 20
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 30,
        padding: 10,
    },
    titleContainer: {
        flex: 1, // Allow the title to take remaining space
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
