// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Dimensions,
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
  console.log(Dimensions.get('screen'));

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: '100%',
          height: '30%',
        }}
      ></View>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: 'orange' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    //   alignItems: 'center',
    //   justifyContent: 'center',
  },
});
