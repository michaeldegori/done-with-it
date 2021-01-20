import { StatusBar } from 'expo-status-bar';
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
} from 'react-native';

export default function App() {
  const handlePress = () => console.log('Text Pressed!');

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button title="Click me" onPress={() => console.log('Button pressed!')} />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
