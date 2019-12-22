import AvatarView from './Avatar';
import React from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { fontSize8, fontSize20 } from '../constants';
import constStyles from '../styles';

const AvatarViewWithName = props => {
  const { letter, name } = props;
  return (
    <View style={constStyles.rowStartContainers}>
      <AvatarView letter={letter ? letter : 'Д'} name={name && name} />
      <Text style={styles.employeeName}>{name ? name : 'Досаев Ержан'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  employeeName: {
    fontSize: fontSize20,
    marginLeft: fontSize8
  }
});

export default AvatarViewWithName;
