import { Avatar } from 'react-native-elements';
import React from 'react';

import { StyleSheet } from 'react-native';
import { black65Color, fontSize12, whiteTree } from '../constants';

const AvatarView = props => {
  return (
    <Avatar
      size={24}
      overlayContainerStyle={{
        backgroundColor: whiteTree
      }}
      containerStyle={styles.containerStyle}
      titleStyle={styles.titleStyle}
      rounded
      title={props.letter}
      activeOpacity={0.7}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignContent: 'center'
  },
  titleStyle: {
    color: black65Color,
    fontSize: fontSize12
  }
});
export default AvatarView;
