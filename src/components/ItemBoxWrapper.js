import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

class ItemBoxWrapper extends React.Component {
  render() {
    return (
    <View style={{flex: 2, flexDirection: 'row', paddingVertical: 10, justifyContent: 'space-between'}}>
    <View style={[styles.infoBox]}>
        <Text style={styles.pro}>Новые</Text>
        <View style={{ flexDirection: 'row'}}>
            <Image style={styles.icon} source={require('./Icons/new.png')}/>
            <Text style={styles.proNum}>12</Text>
        </View>
    </View>
    <View style={[styles.infoBox]}>
        <Text style={styles.pro}>В процессу</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Image style={styles.icon} source={require('./Icons/proccess.png')}/>
            <Text style={styles.proNum}>12</Text>
        </View>
    </View>
</View>)
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
}