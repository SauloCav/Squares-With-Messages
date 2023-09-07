import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Square = ({ message, color }) => {
  return (
    <View style={[styles.square, { backgroundColor: color }]}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  message: {
    color: 'white',
    fontSize: 18,
  },
});

export default Square;