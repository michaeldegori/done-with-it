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
      <Image
        blurRadius={2}
        source={{
          uri: 'https://picsum.photos/200/300',
          width: 200,
          height: 300,
        }}
      />
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
