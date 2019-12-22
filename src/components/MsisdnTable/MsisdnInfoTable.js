import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ColumnHeader from './ColumnHeader';
import MsisdnInfoBar from './MsisdnInfoBar';
import styles from '../../styles/msisdnInfoTable';

const { width } = Dimensions.get('window');

class MsisdnInfoTable extends React.Component {
  ratingLine = (msisdn, time) => {
    return <MsisdnInfoBar msisdn={msisdn} time={time} />;
  };

  render() {
    const { numberofMsisdn } = this.props;
    const time = 'Время';
    return (
      <React.Fragment>
        <ColumnHeader thirdColumnName={time} />
        <View style={styles.tableView}>
          {numberofMsisdn ? (
            <View>
              {this.ratingLine('7702 430 2021', '01:34')}
              {this.ratingLine('7702 430 2021', '01:34')}
              {this.ratingLine('7702 430 2021', '01:34')}
              {this.ratingLine('7702 430 2021', '01:34')}
              {this.ratingLine('7702 430 2021', '01:34')}
              {this.ratingLine('7702 430 2021', '01:34')}
              {this.ratingLine('7702 430 2021', '01:34')}
              {this.ratingLine('7702 430 2021', '01:34')}
              {this.ratingLine('7702 430 2021', '01:34')}
            </View>
          ) : (
            <View>
              {this.ratingLine('7702 430 2021', '01:34')}
              {this.ratingLine('7702 430 2021', '01:34')}
              {this.ratingLine('7702 430 2021', '01:34')}
            </View>
          )}
        </View>
      </React.Fragment>
    );
  }
}

export default MsisdnInfoTable;
