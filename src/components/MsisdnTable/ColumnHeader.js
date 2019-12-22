import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Rating } from 'react-native-ratings';
import styles from '../../styles/msisdnInfoTable';

const { width } = Dimensions.get('window');

class ColumnHeader extends React.Component {
  render() {
    const { thirdColumnName } = this.props;

    return (
      <View style={styles.tableMainView}>
        <Text style={styles.columnHeaderText}>Абонент</Text>

        <Text style={styles.columnHeaderText}>Рейтинг</Text>

        <Text style={styles.columnHeaderText}>{thirdColumnName}</Text>
      </View>
    );
  }
}

export default ColumnHeader;
