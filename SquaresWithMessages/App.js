import React from 'react';
import { View, StyleSheet } from 'react-native';
import Square from './Components/Square';

const App = () => {
  return (
    <View style={styles.container}>
      <Square message="Amado Batista" color="orange" />
      <Square message="Milionário & José Rico" color="green" />
      <Square message="Paulo Sérgio" color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;