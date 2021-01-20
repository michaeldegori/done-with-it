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
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 150,
          height: 70,
        }}
      ></View>
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
