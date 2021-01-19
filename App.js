import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text Pressed!');

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Hello, World! I'm going to go ahead and write a really, really long
        piece of text to test the default text wrapping functions of the Text
        wrapper in React Native.
      </Text>
      <TouchableNativeFeedback onPress={() => console.log('Image tapped!')}>
        <View
          style={{
            width: 200,
            height: 70,
            backgroundColor: 'dodgerblue',
          }}
        />
      </TouchableNativeFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
