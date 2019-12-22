import React, { Component } from 'react';
import { Dimensions, Image, View, Text, StyleSheet, ScrollView } from 'react-native';
import { setCustomText } from 'react-native-global-props';
import { Rating } from 'react-native-ratings';
import imageLink from '../../util/imageLinks';
import TextWithIcon from '../../components/TextWithIcon';
import MsisdnInfoTable from '../../components/MsisdnTable/MsisdnInfoTable';
import CustomHeader from '../../components/CustomHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const customTextProps = {
  style: {
    fontFamily: 'System'
  }
};
const { width } = Dimensions.get('window');

setCustomText(customTextProps);

export default class Help extends Component {
  render() {
    return (
      <ScrollView>
        <View style={[styles.container]}>
          <CustomHeader navigation={this.props.navigation} />
          <View style={[styles.mainContainer]}>
            <View style={[styles.blockFirst]}>
              <Text style={styles.mainQuestion}>1. Как обработать жалобу?</Text>
              <Text style={styles.main}>
                На главной странице, в разделе <Text style={{ fontWeight: 'bold' }}>Новые жалобы </Text>
                отображаются жалобы которые поступили от абонента на данный момент.
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <TextWithIcon text={'Новые жалобы'} iconLink={imageLink['new']} />

              <Text style={styles.podr}>Посмотреть все</Text>
            </View>
            <MsisdnInfoTable />
            <View
              style={{
                marginVertical: 30,
                fontSize: 16
              }}
            >
              <Text>В строке вы увидите номер абонента, рейтинг,который он поставил и оставшееся время на обработку</Text>
            </View>
            <View
              style={{
                height: 50,
                backgroundColor: 'white',
                borderColor: '#e0e0e0',
                borderWidth: 1,
                marginTop: 8
              }}
            >
              <View
                style={{
                  flex: 3,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 5
                }}
              >
                <Text style={styles.phone}>7702 211 9306</Text>
                <Rating style={styles.rating} ratingCount={5} imageSize={15} />
                <Text style={styles.time}>13:36</Text>
              </View>
            </View>
            <View
              style={{
                marginVertical: 30,
                fontSize: 16
              }}
            >
              <Text>
                Если вы не успели обработать жалобу, то она автоматически переходит в раздел <Text style={{ fontWeight: 'bold' }}>Проваленные</Text>
              </Text>
              <Text style={{ marginVertical: 30 }}>
                Нажав на строку новой жалобы, вы переходите на страницу с детальнми описанием жалобы, где вы можете ознакомиться с какой проблемой
                обращаться абонент.
              </Text>
              <Image
                style={{
                  width: width * 0.86,
                  height: width * 0.8
                }}
                source={require('../../assets/complainScreen.png')}
              />
            </View>
            <View
              style={{
                marginVertical: 30,
                fontSize: 16
              }}
            >
              <Text>
                На этой странице, у вас всегда будет видна кнопка <Text style={{ fontWeight: 'bold' }}>Позвонить </Text>с таймером обратного отсчета.
                Этот таймер отображает, сколько времени у вас осталось чтобы обрабоать жалобу.
              </Text>
            </View>

            <View
              style={{
                padding: width * 0.04,
                backgroundColor: 'white',
                fontSize: 16
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: '#faad14',
                  flexDirection: 'row',
                  height: 35,
                  justifyContent: 'center',
                  borderRadius: 2,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <View
                  style={{
                    flex: 5
                  }}
                >
                  <Text style={{ textAlign: 'center', color: '#000000' }}>Позвонить</Text>
                </View>
                <View
                  style={{
                    flex: 2,
                    borderLeftColor: 'white',
                    flexDirection: 'row',
                    borderLeftWidth: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Icon name="alarm" size={15} color={'#000000'} />
                  <Text style={{ textAlign: 'center' }}>02:31</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginVertical: 30,
                fontSize: 16
              }}
            >
              <Text>
                Нажав на кнопку <Text style={{ fontWeight: 'bold' }}>Позвонить </Text>, совершается звонок абоненту и жалоба переходит в категорию{' '}
                <Text style={{ fontWeight: 'bold' }}>В Процессе </Text>
              </Text>
            </View>

            <View
              style={{
                borderColor: '#e8e8e8',
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5,
                fontSize: 16,
                flexDirection: 'row',
                paddingVertical: width * 0.06
              }}
            >
              <Icon name="chevron-right" size={24} color={'#000000'} />
              <Text style={{ fontSize: 16 }}>2. Что такое “В процессе”?</Text>
            </View>

            <View
              style={{
                borderColor: '#e8e8e8',
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5,
                fontSize: 16,
                flexDirection: 'row',
                paddingVertical: width * 0.06
              }}
            >
              <Icon name="chevron-right" size={24} color={'#000000'} />
              <Text style={{ fontSize: 16 }}>3. Как попадают жалобы в “Проваленные?</Text>
            </View>

            <View
              style={{
                borderColor: '#e8e8e8',
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5,
                fontSize: 16,
                flexDirection: 'row',
                paddingVertical: width * 0.06
              }}
            >
              <Icon name="chevron-right" size={24} color={'#000000'} />
              <Text style={{ fontSize: 16 }}>4. Как формируется рейтинг?</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#f5f5f5' },
  mainContainer: {
    margin: '6.66%'
  },
  help: {
    fontSize: 32,
    fontSize: 20,
    padding: 20,
    color: 'white',
    textAlign: 'center'
  },
  blockFirst: {
    marginVertical: 30
  },
  mainQuestion: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  main: {
    color: '#000000',
    fontSize: 16,
    marginTop: 20,
    lineHeight: 22
  },
  place: {
    fontSize: 16,
    paddingTop: 6,
    paddingLeft: 24,
    color: '#595959'
  },
  star: {
    color: '#faad14',
    fontSize: 14,
    marginLeft: 100,
    marginTop: 11
  },
  podr: {
    textAlign: 'right',
    color: '#faad14',
    fontSize: 16
  },
  pro: {
    textAlign: 'left',
    marginTop: 16,
    fontSize: 18,
    color: '#595959'
  },
  proNum: {
    textAlign: 'left',
    fontSize: 32,
    color: '#595959'
  },
  head: {
    fontSize: 16
  },
  phone: {
    fontSize: 15,
    marginTop: 10
  },
  time: {
    marginTop: 10
  },
  rating: {
    marginTop: 12
  },
  footer: {},
  footerText: {
    marginTop: 24,
    textAlign: 'center',
    color: '#9E9E9E'
  }
});
