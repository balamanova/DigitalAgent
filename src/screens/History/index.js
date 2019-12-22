import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { setCustomText } from 'react-native-global-props';
import CustomHeader from '../../components/CustomHeader';
import Footer from '../../components/Footer';
import constStyles from '../../styles';
import { fontSize8, fontSize6 } from '../../constants';
const { width } = Dimensions.get('window');

const customTextProps = {
  style: {
    fontFamily: 'System'
  }
};

setCustomText(customTextProps);

class HistoryScreen extends Component {
  render() {
    return (
      <ScrollView style={[constStyles.container]}>
        <CustomHeader navigation={this.props.navigation} />
        <View style={[constStyles.mainContainer]}>
          <View style={[constStyles.container]}>
            <View style={styles.mainView}>
              <View style={styles.leftView}>
                <Image style={styles.icons} source={require('../Home/Icons/success.png')} />
                <View style={styles.view}></View>
              </View>
              <View style={styles.rightView}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 16 }}>
                    Жалоба от <Text style={{ fontWeight: 'bold' }}>7 701 777 28 13</Text> получила {'\n'}
                    статус <Text style={{ fontWeight: 'bold' }}> Обработанные</Text>
                  </Text>
                </View>
                <Text style={{ fontSize: 14, color: '#8c8c8c', marginTop: 8 }}>{'28.03.2019, 14:35'}</Text>
              </View>
            </View>
            <View style={styles.mainView}>
              <View style={styles.leftView}>
                <Image style={styles.icons} source={require('../Home/Icons/fail.png')} />
                <View style={styles.view}></View>
              </View>
              <View style={styles.rightView}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 16 }}>
                    Жалоба от <Text style={{ fontWeight: 'bold' }}>7 702 553 19 21 </Text> получила {'\n'}
                    статус <Text style={{ fontWeight: 'bold' }}> Проваленные</Text>
                  </Text>
                </View>
                <Text style={{ fontSize: 14, color: '#8c8c8c', marginTop: 8 }}>{'28.03.2019, 14:20'}</Text>
              </View>
            </View>
            <View style={styles.mainView}>
              <View style={styles.leftView}>
                <Image style={styles.icons} source={require('../Home/Icons/new.png')} />
                <View style={styles.view}></View>
              </View>
              <View style={styles.rightView}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 16 }}>
                    Новая жалоба от <Text style={{ fontWeight: 'bold' }}>7 702 553 19 21</Text>
                  </Text>
                </View>
                <Text style={{ fontSize: 14, color: '#8c8c8c', marginTop: 8 }}>{'28.03.2019, 14:35'}</Text>
              </View>
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    );
  }
}

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    margin: width * 0.06
  },
  rightView: {
    marginBottom: fontSize8 * 3
  },
  mainView: {
    flexDirection: 'row',
    marginVertical: fontSize8 / 2
  },
  leftView: {
    flexDirection: 'column',
    marginRight: fontSize8
  },
  view: {
    borderColor: '#8c8c8c',
    borderLeftWidth: 1,
    marginLeft: fontSize6,
    marginVertical: fontSize8 / 2,
    flex: 3
  },
  icons: {
    width: 16,
    height: 16
  }
});
