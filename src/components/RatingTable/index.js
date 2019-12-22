import React from 'react';
import { View, Dimensions } from 'react-native';
import RatingColumnHeader from './RatingColumnHeader';
import RatingInfoBar from './RatingInfoBar';
import styles from '../../styles/msisdnInfoTable';

const { width } = Dimensions.get('window');

class RatingTable extends React.Component {
  ratingLine = (num, address, rate) => {
    return <RatingInfoBar address={address} num={num} rate={rate} />;
  };

  render() {
    const { numberofMsisdn } = this.props;
    const time = 'Время';
    return (
      <React.Fragment>
        <RatingColumnHeader />
        <View style={styles.tableView}>
          {this.ratingLine('1', 'Отделение №8; \nЦОН Сарыаркинского района', '4.9')}
          {this.ratingLine('2', 'Отделение №8; \nЦОН Сарыаркинского района', '4.9')}
          {this.ratingLine('3', 'Отделение №8; \nЦОН Сарыаркинского района', '4.9')}
        </View>
      </React.Fragment>
    );
  }
}

export default RatingTable;
