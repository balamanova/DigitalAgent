import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { fontSize8, fontSize14, width } from '../../constants';

class RatingInfoBar extends React.Component {
  render() {
    const { address, num, rate } = this.props;

    return (
      <View style={styles.view}>
        <Text style={styles.text}>{num}</Text>
        <Text style={styles.text}>{address}</Text>
        <Text style={styles.text}>{rate}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    marginVertical: fontSize8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.03,
    height: 50
  },
  text: {
    fontSize: fontSize14,
    lineHeight: 18
  }
});

export default RatingInfoBar;
