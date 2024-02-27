import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StoryDisplay() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Story Highlights</Text>
            <ScrollView horizontal={true} style={styles.scrollView}>
                <View style={styles.photosContainer}>
                    <Image source={require('../assets/city.jpg')} style={styles.photo} />
                    <Image source={require('../assets/city.jpg')} style={styles.photo} />
                    <Image source={require('../assets/city.jpg')} style={styles.photo} />
                    <Image source={require('../assets/city.jpg')} style={styles.photo} />
                    <Image source={require('../assets/city.jpg')} style={styles.photo} />
             
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 10,
        height: 200,
        borderTopColor: "gray",
        borderTopWidth: 0.5,

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    scrollView: {
        flexDirection: 'row',
    },
    photosContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    photo: {
        width: 85,
        height: 140,
        borderRadius: 10,
        marginRight: 10,
    },
});
