import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import ColumnHeader from './ColumnHeader';
import styles from '../../styles/msisdnInfoTable';
import { Rating } from 'react-native-ratings';
import AvatarView from '../Avatar';

class MsisdnInfoBarWithAvatarAndTime extends React.Component {
  ratingLine = (msisdn, letter, time) => {
    return (
      <TouchableOpacity style={styles.view} onPress={() => this.props.navChanging()}>
        <View style={styles.mainView}>
          <Text style={styles.phone}>{msisdn}</Text>
          <Rating style={styles.rating} ratingCount={5} imageSize={15} />
          <Text style={styles.time}>{time}</Text>
          <AvatarView letter={letter} />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <React.Fragment>
        <ColumnHeader time="Время" />
        <View>
          <View style={styles.tableView}>
            {this.ratingLine('7702 430 2021', 'A', '01:34')}
            {this.ratingLine('7702 430 2021', 'A', '01:34')}
            {this.ratingLine('7702 430 2021', 'A', '01:34')}
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default MsisdnInfoBarWithAvatarAndTime;
