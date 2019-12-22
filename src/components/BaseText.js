import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { fontSize24 } from '../constants';

const BaseText = props => {
  return <Text style={styles.text}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize24,
    lineHeight: 33
  }
});

export default BaseText;
