import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { setCustomText } from 'react-native-global-props';
import MsisdnInfoTable from '../../../components/MsisdnTable/MsisdnInfoTable';
import Footer from '../../../components/Footer';
import constStyles from '../../../styles';
import BaseTextWithIcon from '../../../components/BaseTextWithIcon';
import imageLink from '../../../util/imageLinks';
const customTextProps = {
  style: {
    fontFamily: 'System'
  }
};

setCustomText(customTextProps);
const { width } = Dimensions.get('window');

export default class NewComplaints extends Component {
  render() {
    return (
      <ScrollView style={[constStyles.container]}>
        <View style={[constStyles.mainContainer]}>
          <View>
            <BaseTextWithIcon text={'Новые жалобы'} src={imageLink['new']} />
            <Text style={styles.place}>
              Список новых жалоб от абонента, с установленным рейтингом и количеством времени, за которой необходимо позванить
            </Text>
          </View>
          <MsisdnInfoTable numberofMsisdn={8} />
        </View>
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  place: {
    fontSize: 14,
    paddingTop: 6,
    color: '#595959'
  }
});
