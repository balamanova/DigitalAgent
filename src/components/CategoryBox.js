import React from 'react';
import { Dimensions, View, Text, StyleSheet, Image } from 'react-native';
import { fontSize20, black65Color, whiteFour, mainYellowColor, fontSize12, fontSize8 } from '../constants';
const { width } = Dimensions.get('window');

class CategoryBox extends React.Component {
  render() {
    const { text, iconLink, active } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.box, active ? styles.activeBox : styles.defaultBox]}>
          <Image style={styles.icon} source={iconLink} />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: fontSize12
  },
  icon: {},
  text: {
    textAlign: 'center',
    fontSize: fontSize20 * 0.5,
    color: black65Color
  },
  box: {
    width: width * 0.13,
    height: width * 0.13,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: fontSize8,
    borderRadius: 3
  },
  defaultBox: {
    borderColor: whiteFour
  },
  activeBox: {
    borderColor: mainYellowColor
  }
});
export default CategoryBox;
