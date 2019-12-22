import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Rating } from 'react-native-ratings';
import ColumnHeader from './ColumnHeader';
import styles from '../../styles/msisdnInfoTable';

const { width } = Dimensions.get('window');

class MsisdnInfoTableLinkedItem extends React.Component {
  ratingLine = (msisdn, time) => {
    return (
      <TouchableOpacity style={styles.view} onPress={() => this.props.navChanging()}>
        <View style={styles.mainView}>
          <Text style={styles.phone}>{msisdn}</Text>
          <Rating style={styles.rating} ratingCount={5} imageSize={15} />
          <Text style={styles.time}>{time}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const time = 'Время';
    return (
      <React.Fragment>
        <ColumnHeader thirdColumnName={time} />
        <View>
          <View style={styles.tableView}>
            {this.ratingLine('7702 430 2021', '01:34')}
            {this.ratingLine('7702 430 2021', '01:34')}
            {this.ratingLine('7702 430 2021', '01:34')}
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default MsisdnInfoTableLinkedItem;
