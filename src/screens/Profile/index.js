import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { setCustomText } from 'react-native-global-props';
import CustomHeader from '../../components/CustomHeader';
import AvatarViewWithName from '../../components/AvatarViewWithName';
import InfoTypeText from '../../components/InfoTypeText';
import constStyles from '../../styles';
import Footer from '../../components/Footer';
import { width } from '../../constants';
const customTextProps = {
  style: {
    fontFamily: 'System'
  }
};

setCustomText(customTextProps);

export default class Profile extends Component {
  render() {
    return (
      <ScrollView style={[constStyles.container]}>
        <CustomHeader navigation={this.props.navigation} />
        <View
          style={{
            height: width * 0.4
          }}
        >
          <Image
            source={require('../../assets/profilePhoto.jpg')}
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        </View>

        <View style={[constStyles.mainContainer]}>
          <View>
            <Text style={constStyles.typeText}>ФИО</Text>
            <AvatarViewWithName />
          </View>
          <InfoTypeText type={'Должность'} text={'Руководитель отдела'} textBlackColoured={true} />

          <InfoTypeText type={'Раб. телефон'} text={'+7 727 412 44 56, 226'} textBlackColoured={true} />
          <View style={constStyles.columnStartContainers}>
            <Text style={constStyles.typeText}>Моб. телефон</Text>
            <Text style={[constStyles.type, constStyles.black65Color]}>+7 701 556 20 16</Text>
            <Text style={[constStyles.type, constStyles.black65Color]}>+7 7 770 89 60</Text>
          </View>
          <InfoTypeText type={'Электронная почта'} text={'a.aliyev@gmail.com'} textBlackColoured={true} />
          <InfoTypeText type={'Организация'} text={'Отделение №3, ЦОН Бостандыкского района, г.Алматы'} textBlackColoured={true} />

          <View
            style={[
              constStyles.columnStartContainers,
              {
                borderTopColor: '#e8e8e8',
                borderTopWidth: 1
              }
            ]}
          />
          <Text style={styles.inProccess}>Контактные лица</Text>
          <AvatarViewWithName letter={'Д'} name={'Досаев Серик Бахытович'} />
          <AvatarViewWithName letter={'Р'} name={'Рахматулла Димаш Еркінұлы'} />
        </View>
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#343434'
  },
  process: {
    marginTop: 24,
    marginLeft: 24
  },
  date: {
    fontSize: 20
  },
  header: {
    fontSize: 20,
    marginTop: 20,
    marginLeft: 8
  },
  icons: {
    width: 30,
    height: 30,
    marginTop: 20
  },
  help: {
    fontSize: 16,
    fontSize: 20,
    padding: 20,
    color: 'white',
    textAlign: 'center'
  },
  employeeName: {
    fontSize: 22,
    marginTop: 5,
    marginLeft: 60
  },
  inProccess: {
    color: '#8c8c8c',
    fontSize: 14
  },
  onProccess: {
    color: '#8c8c8c',
    fontSize: 20,
    marginRight: 50
  },
  rating: {
    marginTop: 5,
    alignItems: 'flex-start'
  },
  footer: {
    marginBottom: 20
  },
  footerText: {
    marginTop: 24,
    textAlign: 'center',
    color: '#9E9E9E'
  }
});
