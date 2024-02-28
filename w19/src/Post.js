import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Post({ title, date, imageUrl }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    date: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
});
