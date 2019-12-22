import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Rating } from 'react-native-ratings';
import styles from '../../styles/msisdnInfoTable';

const { width } = Dimensions.get('window');

class RatingColumnHeader extends React.Component {
  render() {
    return (
      <View style={styles.tableMainView}>
        <Text style={styles.columnHeaderText}>N</Text>

        <Text style={styles.columnHeaderText}>Услугодатель</Text>

        <Text style={styles.columnHeaderText}>Рейтинг</Text>
      </View>
    );
  }
}

export default RatingColumnHeader;
