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
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click me"
        onPress={() =>
          Alert.alert('My Alert', 'Button tapped!', [
            { text: 'Yes', onPress: () => console.log('Yesss') },
            { text: 'No', onPress: () => console.log('Noooo') },
          ])
        }
      />
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
