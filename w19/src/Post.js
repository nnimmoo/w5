import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Footer() {

    return (
        <View style={styles.container}>
    
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
