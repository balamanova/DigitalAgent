import React from 'react';
import { Dimensions, View, Text, StyleSheet, Image } from 'react-native';

const { width } = Dimensions.get('window');

class InfoBox extends React.Component {
  render() {
    const { text, iconLink, proNum } = this.props;
    return (
      <View style={[styles.infoBox4]}>
        <Text style={styles.pro}>{text}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.icon} source={iconLink} />
          <Text style={styles.proNum}>{proNum}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    marginTop: width * 0.025
  },
  pro: {
    textAlign: 'left',
    fontSize: width * 0.038,
    color: '#595959'
  },
  proNum: {
    textAlign: 'left',
    marginLeft: width * 0.03,
    fontSize: width * 0.066,
    color: '#595959'
  },
  infoBox4: {
    width: width * 0.42,
    height: width * 0.21,
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    flexDirection: 'column',
    padding: width * 0.04
  }
});
export default InfoBox;
