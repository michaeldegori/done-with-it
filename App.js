import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  console.log('App executed');

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2}>
        Hello, World! I'm going to go ahead and write a really, really long
        piece of text to test the default text wrapping functions of the Text
        wrapper in React Native.
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
