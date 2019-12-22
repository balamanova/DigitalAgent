import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import constStyles from '../styles';

const InfoTypeText = props => {
  const { type, text, textBlackColoured } = props;
  return (
    <View style={constStyles.columnStartContainers}>
      <Text style={constStyles.typeText}>{type}</Text>
      <Text
        style={[
          constStyles.type,
          textBlackColoured && {
            color: '#000000'
          }
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default InfoTypeText;
