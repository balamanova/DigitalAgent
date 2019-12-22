import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { setCustomText } from 'react-native-global-props';
import CustomHeader from '../../components/CustomHeader';
import InfoBox from '../../components/InfoBox';
import imageLink from '../../util/imageLinks';
import MsisdnInfoTable from '../../components/MsisdnTable/MsisdnInfoTable';
import MsisdnInfoBarWithAvatarAndTime from '../../components/MsisdnTable/MsisdnInfoBarWithAvatarAndTime';
import MsisdnInfoTableWithAuthor from '../../components/MsisdnTable/MsisdnInfoTableWithAuthor';
import TextWithIcon from '../../components/TextWithIcon';
import Footer from '../../components/Footer';
import constStyles from '../../styles';
import LookAnotherPage from '../../components/LookAnotherPage';
import BaseText from '../../components/BaseText';

const { width } = Dimensions.get('window');

const customTextProps = {
  style: {
    fontFamily: 'System'
  }
};

setCustomText(customTextProps);

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView style={[constStyles.container]}>
        <CustomHeader navigation={this.props.navigation} />
        <View style={[constStyles.mainContainer]}>
          <View>
            <View>
              <BaseText text={'Добро пожаловать, \nАрсен Калимдулдаевич!'} />
              <Text style={styles.place}>Отделение №3, ЦОН Бостандыкского района, г.Алматы</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image style={styles.starr} source={require('./Icons/star.png')} />
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 5,
                  marginLeft: 5,
                  color: '#595959'
                }}
              >
                3.5
              </Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Rates')}>
                <Text style={styles.star}>Подробнее</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box]}>
              <View style={[styles.box8]}>
                <InfoBox text={'Новые'} iconLink={imageLink['new']} proNum={12} />
                <InfoBox text={'В процессe'} iconLink={imageLink['proccess']} proNum={5} />
              </View>
              <View style={[styles.box8]}>
                <InfoBox text={'Обработано'} iconLink={imageLink['success']} proNum={58} />
                <InfoBox text={'Провалено'} iconLink={imageLink['fail']} proNum={16} />
              </View>
            </View>
          </View>

          <View style={[styles.sectionSplitter]}>
            <View style={[styles.section]}>
              <TextWithIcon text={'Новые жалобы'} iconLink={imageLink['new']} />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('NewComplaints')}>
                <LookAnotherPage />
              </TouchableOpacity>
            </View>
            <MsisdnInfoTable />
          </View>

          <View style={[styles.sectionSplitter]}>
            <View style={[styles.section]}>
              <TextWithIcon text={'В процессe'} iconLink={imageLink['proccess']} />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Process')}>
                <LookAnotherPage />
              </TouchableOpacity>
            </View>
            <MsisdnInfoBarWithAvatarAndTime navChanging={() => this.props.navigation.navigate('Process')} />
          </View>

          <View style={[styles.sectionSplitter]}>
            <View style={[styles.section]}>
              <TextWithIcon text={'Обработанные'} iconLink={imageLink['success']} />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Success')}>
                <LookAnotherPage />
              </TouchableOpacity>
            </View>
            <MsisdnInfoTableWithAuthor navChanging={() => this.props.navigation.navigate('Success')} />
          </View>

          <View style={[styles.sectionSplitterWithBottom]}>
            <View style={[styles.section]}>
              <TextWithIcon text={'Проваленные'} iconLink={imageLink['fail']} />
              {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Process')}> */}
              <LookAnotherPage />
              {/* </TouchableOpacity> */}
            </View>
            <MsisdnInfoTableWithAuthor navChanging={() => this.props.navigation.navigate('Success')} />
          </View>
        </View>
        <Footer />
      </ScrollView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  help: {
    fontSize: 20,
    color: 'white'
  },
  box: {
    flex: 3,
    flexDirection: 'column',
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  box8: {
    flex: 2,
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  place: {
    fontSize: 16,
    paddingTop: 6,
    color: '#595959'
  },
  star: {
    color: '#faad14',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 11
  },
  starr: {
    marginTop: 11
  },

  section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sectionSplitter: {
    marginVertical: width * 0.067
  },
  sectionSplitterWithBottom: {
    marginTop: width * 0.067
  },
  icon: {
    marginTop: 15,
    marginLeft: 17
  }
});
