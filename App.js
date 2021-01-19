import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text Pressed!');

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Hello, World! I'm going to go ahead and write a really, really long
        piece of text to test the default text wrapping functions of the Text
        wrapper in React Native.
      </Text>
      <Image source={require('./assets/icon.png')} />
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
