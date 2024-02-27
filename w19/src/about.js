import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function About() {

    return (
        <View style={styles.container}>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.blueButton]}>
                    <Text style={styles.buttonText}>Follow</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="chatbox-outline" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="ellipsis-horizontal" size={24} color="gray" />
                </TouchableOpacity>
            </View>


            <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                    <Ionicons name="people-outline" size={24} color="black"/>
                    <Text style={styles.boldText} >2.3 Million followers</Text>
                </View>
                <View style={styles.detailItem}>
                    <Ionicons name="person-outline" size={24} color="black" />
                    <Text style={styles.text}>Actor</Text>
                </View>
                <TouchableOpacity style={styles.detailItem}>
                    <Ionicons name="ellipsis-horizontal" size={24} color="black" />
                    <Text>See more about this user</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width:"92%"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ececee',
        borderRadius: 5,
        width: 60,
        height: 35,
    },
    blueButton: {
        backgroundColor: '#1c79f6',
        width: 215
    },
    buttonText: {
        color: 'white',
    },
    text: {
        fontSize: 13
    },
    boldText:{ 
         fontSize: 13,
        fontWeight:'bold'
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 5,
        gap:3
    },
});
