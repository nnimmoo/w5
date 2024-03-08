import React from 'react';
import { Text, View, Image, StyleSheet, FlatList } from 'react-native';

const Updates = () => {
    const updatesData = [
        { id: '1', image: 'https://placekitten.com/200/200', name: 'John Doe', time: '10:00 AM' },
        { id: '2', image: 'https://placekitten.com/200/285', name: 'Jane Smith', time: '11:30 AM' },
        { id: '3', image: 'https://placekitten.com/200/210', name: 'Alice Johnson', time: '1:45 PM' },
        // Add more updates as needed
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Status</Text>
                <View style={styles.statusContainer}>
                    <Image
                        source={{ uri: 'https://placekitten.com/200/200' }}
                        style={styles.statusImage}
                    />
                    <View style={styles.statusTextContainer}>
                        <Text style={styles.statusText}>My status</Text>
                        <Text style={styles.statusTextSmall}>Tap to add status update</Text>
                    </View>
                </View>
            </View>
            <View style={styles.recentUpdates}>
                <Text style={styles.recentUpdatesHeader}>Recent Updates</Text>
                <FlatList
                    data={updatesData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.updateItem}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.updateImage}
                            />
                            <View style={styles.updateTextContainer}>
                                <Text style={styles.updateName}>{item.name}</Text>
                                <Text style={styles.updateTime}>{item.time}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121b22',
        padding: 20,
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#c0c8cf'
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    statusImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'green',
        marginRight: 10,
    },
    statusTextContainer: {
        flex: 1,
    },
    statusText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#c0c8cf'
    },
    statusTextSmall: {
        fontSize: 14,
        color: '#888888',
    },
    recentUpdates: {
        marginTop: 20,
    },
    recentUpdatesHeader: {
        fontSize: 12,
        marginBottom: 20,
        color: '#c0c8cf'
    },
    updateItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    updateImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        borderWidth: 2,
        borderColor: 'green',
    },
    updateTextContainer: {
        flex: 1,
    },
    updateName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#c0c8cf'
    },
    updateTime: {
        fontSize: 14,
        color: '#888888',
    },
});

export default Updates;
