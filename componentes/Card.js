import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        borderRadius: 50,
        marginTop: 20,
    },
  cafe: {
    width: 280,
    height: 300,
    borderRadius: 50,
  },
  texto: {
    overflow: 'hidden',
    textAlign: 'center',
    padding: 10.,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  }
});

const Card = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.cafe} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG'}}/>
      <Text style={styles.texto}>Americano</Text>
    </View>
  );
};

export default Card;