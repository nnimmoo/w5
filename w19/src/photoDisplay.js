import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PhotoDisplay() {

    return (
        <View style={styles.container}>
            <View style={styles.images}>
                <View style={styles.backgroundContainer}>
                    <Image source={require('../assets/city.jpg')} style={styles.backgroundImage} resizeMode="cover" />
                </View>

                <View style={styles.imageContainer}>
                    <Image source={require('../assets/city.jpg')} style={styles.userImage} resizeMode="cover" />
                </View>
            </View>


            <View style={styles.textContainer}>
                <Text style={styles.title}> New User </Text>
                <Text style={styles.bio}>This is my Bio</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 330,
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 20
    },

    images: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },

    backgroundContainer: {
        height: 200,
        width: '92%',
       
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
         borderRadius: 10,
    },

    imageContainer: {
        alignItems: 'center',
        position: "absolute",
        top: 135,
        left: "50%", 
        marginLeft: -65, 
    },


    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
       
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },

    bio: {
        fontSize: 13,
        color: 'gray',
    },

    userImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 2,
        borderColor: 'black'
    }
});
