import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class TextWithIcon extends React.Component {
  render() {
    const { text, iconLink } = this.props;
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.icons} source={iconLink} />
        <Text style={styles.head}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icons: {
    marginTop: 5
  },
  head: {
    fontSize: 14,
    lineHeight: 22,
    marginLeft: 5
  }
});

export default TextWithIcon;
