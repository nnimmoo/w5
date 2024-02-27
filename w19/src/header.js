import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    const onPressPlus = () => {
        // Define the behavior for the plus button press here
    };

    const onPressGoBack = () => {
        // Define the behavior for the go back button press here
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressGoBack} style={styles.button}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>User Name</Text>
            <TouchableOpacity onPress={onPressPlus} style={styles.button}>
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
        paddingTop:20
    },
    button: {
        backgroundColor: 'transparent',
        borderRadius: 30,
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
