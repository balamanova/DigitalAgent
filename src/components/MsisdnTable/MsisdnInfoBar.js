import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Rating } from 'react-native-ratings';
import styles from '../../styles/msisdnInfoTable';

const { width } = Dimensions.get('window');

class MsisdnInfoBar extends React.Component {
  render() {
    const { msisdn, time } = this.props;

    return (
      <View style={styles.view}>
        <View style={styles.mainView}>
          <Text style={styles.phone}>{msisdn}</Text>
          <Rating style={styles.rating} ratingCount={5} imageSize={20} />
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  }
}

export default MsisdnInfoBar;
