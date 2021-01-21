import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default WelcomeScreen;
