import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ViewImageScreen = () => {
  return (
    <View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
