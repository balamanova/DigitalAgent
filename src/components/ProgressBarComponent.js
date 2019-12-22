import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { fontSize14, black65Color, fontSize8, fontSize12, mainYellowColor } from '../constants';

export default class ProgressBarComponent extends Component {
  render() {
    const { num, result } = this.props;
    return (
      <View style={styles.rowStartContainers}>
        <Text style={styles.ratingNum}>{num}</Text>
        <Progress.Bar height={fontSize14} progress={result / 100} width={80} color={mainYellowColor} borderRadius={0} borderWidth={1} />
        <Text
          style={[
            styles.ratingNum,
            {
              marginLeft: fontSize8
            }
          ]}
        >
          {result}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowStartContainers: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginVertical: 2
  },
  ratingNum: {
    marginRight: fontSize12,
    marginTop: -2,
    lineHeight: 20,
    fontSize: fontSize12,
    color: black65Color
  },
  ratesView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
});
