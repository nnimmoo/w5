import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './src/header';
import PhotoDisplay from './src/photoDisplay';
import About from './src/about';
import StoryDisplay from './src/storyDisplay';
import Footer from './src/footer';
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView vertical={true} style={styles.ScrollView} >
        <PhotoDisplay />
        <About />
        <StoryDisplay />

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
