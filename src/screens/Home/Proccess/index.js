import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { setCustomText } from 'react-native-global-props';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Footer from '../../../components/Footer';
import constStyles from '../../../styles';
import AvatarViewWithName from '../../../components/AvatarViewWithName';
import InfoTypeText from '../../../components/InfoTypeText';
import { width, fontSize8, backgroundColor } from '../../../constants';
import { categoryImageLinks } from '../../../util/imageLinks';
import CategoryBox from '../../../components/CategoryBox';
const customTextProps = {
  style: {
    fontFamily: 'System'
  }
};

setCustomText(customTextProps);

export default class Process extends Component {
  render() {
    return (
      <ScrollView style={constStyles.container}>
        <View style={constStyles.mainContainer}>
          <View>
            <Text style={constStyles.typeText}>Обрабатывает</Text>
            <AvatarViewWithName />
          </View>
          <InfoTypeText type={'Абонент'} text={'7 702 430 2021'} />
          <InfoTypeText type={'ФИО'} text={'Ахметов Бауыржан Ермекович'} />
          <InfoTypeText type={'ИИН'} text={'781210400375'} />
          <View style={constStyles.columnStartContainers}>
            <Text style={constStyles.typeText}>Оценка</Text>
            <Rating style={styles.rating} ratingCount={5} imageSize={20} />
          </View>
          <View style={constStyles.columnStartContainers}>
            <Text style={constStyles.typeText}>Категория</Text>
            <View style={styles.categoryView}>
              <CategoryBox text={'Комфорт'} iconLink={categoryImageLinks['comfort']} />
              <CategoryBox text={'Сервис'} iconLink={categoryImageLinks['service']} active={true} />
              <CategoryBox text={'Процедуры'} iconLink={categoryImageLinks['procedure']} />
              <CategoryBox text={'Персонал'} iconLink={categoryImageLinks['personal']} />
            </View>
          </View>
          <View style={constStyles.columnStartContainers}>
            <Text style={constStyles.typeText}>Жалоба</Text>
            <Text style={constStyles.type}>
              ● <Text>Не компетентность персонала</Text>
            </Text>
            <Text style={constStyles.type}>
              ● <Text>Время ожидания очереди</Text>
            </Text>
            <Text style={constStyles.type}>
              ● <Text>Отсутствие условий для лицо с ограниченными возможностями</Text>
            </Text>
          </View>
          <InfoTypeText type={'Комментарий'} text={'Ужасное поведение менеджера, грубит, тянет время, неуч. Примите меры!'} />
          <View style={constStyles.columnStartContainers}>
            <Text style={constStyles.typeText}>Фотография</Text>
            <View>
              <Image source={require('../../../assets/orderImage.jpg')} style={styles.image} alt="Image Not Found" />
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginTop: fontSize8,
    width: width * 0.866
  },
  categoryView: {
    flexDirection: 'row'
  },
  help: {
    fontSize: 16,
    fontSize: 20,
    padding: 20,
    color: 'white',
    textAlign: 'center'
  },
  rating: {
    marginTop: 5,
    alignItems: 'flex-start',
    backgroundColor: backgroundColor
  }
});
