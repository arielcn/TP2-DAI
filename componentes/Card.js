import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  texto: {
    overflow: 'hidden',
    textAlign: 'center',
  }
});

const Card = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'}}/>
      <Text style={styles.texto}>Americano</Text>
    </View>
  );
};

export default Card;