// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  SafeAreaView,
  Alert,
  Button,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text Pressed!');

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello, this is text. Thanks.</Text>
      <Button title="Click me" onPress={() => console.log('Button pressed!')} />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'orange' };

console.log(StatusBar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
});
