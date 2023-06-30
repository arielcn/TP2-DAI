import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 300,
    height: 150,
  }
});

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={{ uri: 'https://logos-world.net/wp-content/uploads/2022/01/Central-Perk-Logo.png'}}/>
    </View>
  );
};

export default Logo;