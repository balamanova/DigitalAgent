import React from 'react';
import { View, Image, Platform, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Header } from 'react-native-elements';
import styles from './styles';
const { width } = Dimensions.get('window');

const CustomHeader = ({ navigation }) => (
  <View style = {{paddingTop:  Platform.OS === 'ios' ? width * 0.08 : 0, backgroundColor: '#343434'}}>
  <Header
    containerStyle={[styles.container, {paddingTop: 15}]}
    leftComponent={<Icon name="menu" style={[styles.icon]} onPress={() => navigation.openDrawer()} />}
    centerComponent={<Image style={[styles.image]} source={require('../../assets/logo.png')} />}
  />
  </View>

);

export default CustomHeader;
