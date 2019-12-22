import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontSize14, orangeyYellow } from '../constants';

const LookAnotherPage = () => {
  return <Text style={styles.text}>Посмотреть все</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'right',
    color: orangeyYellow,
    fontSize: fontSize14,
    lineHeight: 22
  }
});

export default LookAnotherPage;
