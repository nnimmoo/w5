import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../src/header';
import PhotoDisplay from '../src/photoDisplay';
import About from '../src/about';
import StoryDisplay from '../src/storyDisplay';
import Footer from '../src/footer';
import CreatePost from '../src/CreatePost';
import Post from '../src/Post';
export default function User({ route }) {
    const { name } = route.params; // Get the 'name' parameter passed from the login screen

    return (
        <View style={styles.container}>
            <Header name={name} />
            <ScrollView vertical={true} style={styles.ScrollView} >
                <PhotoDisplay name={name} />
                <About />
                <StoryDisplay />
                <CreatePost />
                <Post
                    title="New Forget I bought"
                    date="February 29, 2024"
                    imageUrl="https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2020/12/plumeria-2-Eric-Tessmer-Flickr-1024x708.jpg"
                />
             <Post
                    title="Check Out this"
                    date="February 22, 2024"
                    imageUrl="https://cdn.firstcry.com/education/2022/12/12101916/Flower-Names-In-English-For-Kids.jpg"
                />
                <Post
                    title="Beautiful day"
                    date="February 13, 2024"
                    imageUrl="https://www.farmersalmanac.com/wp-content/uploads/2021/04/forget-me-not-flower-as309740666.jpeg"
                /> 
            </ScrollView>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ScrollView: {
        width: '100%'
    }
});
