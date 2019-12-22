import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { fontSize24, fontSize20, fontSize8, fontSize6 } from '../constants';

const BaseTextWithIcon = props => {
  const { src, text } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={src} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row' },
  icon: {
    width: fontSize24,
    height: fontSize24,
    marginTop: fontSize6,
    marginRight: fontSize8
  },
  text: {
    fontSize: fontSize20,
    lineHeight: 33
  }
});

export default BaseTextWithIcon;
