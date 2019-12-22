import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { black25Color, fontSize12 } from '../constants';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2019 Digital Agent. Все права принадлежат народу.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginVertical: 24,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  footerText: {
    color: black25Color,
    fontSize: fontSize12,
    textAlign: 'center'
  }
});

export default Footer;
