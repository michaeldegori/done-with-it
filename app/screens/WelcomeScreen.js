import React from 'react';
import { ImageBackground } from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
    ></ImageBackground>
  );
};

export default WelcomeScreen;
