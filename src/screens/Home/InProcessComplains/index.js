import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { setCustomText } from 'react-native-global-props';
import { Rating, AirbnbRating } from 'react-native-ratings';

const customTextProps = {
  style: {
    fontFamily: 'System'
  }
};

setCustomText(customTextProps);

export default class InProcessComplains extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
        <View style={{ backgroundColor: '#f5f5f5' }}>
          <View style={styles.process}>
            <Text style={styles.inProccess}>Обрабатывает</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image style={styles.icons} source={require('../Icons/success.png')} />
              <Text style={styles.header}>Сотрудник АДГС</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image style={styles.icons} source={require('../Icons/success.png')} />
              <Text style={styles.header}>Досаев Серик</Text>
            </View>
          </View>
          <View style={styles.process}>
            <Text style={styles.inProccess}>Абонент</Text>
            <Text style={styles.onProccess}>7 702 430 2021</Text>
          </View>
          <View style={styles.process}>
            <Text style={styles.inProccess}>ФИО</Text>
            <Text style={styles.onProccess}>Ахметов Бауыржан Ермекович</Text>
          </View>
          <View style={styles.process}>
            <Text style={styles.inProccess}>ИИН</Text>
            <Text style={styles.onProccess}>781210400375</Text>
          </View>
          <View style={styles.process}>
            <Text style={styles.inProccess}>Оценка</Text>
            <Rating style={styles.rating} ratingCount={5} imageSize={20} />
          </View>
          <View style={styles.process}>
            <Text style={styles.inProccess}>Категория</Text>
          </View>
          <View style={styles.process}>
            <Text style={styles.inProccess}>Жалоба</Text>
            <Text style={styles.onProccess}>
              ● <Text>Не компетентность персонала</Text>
            </Text>
            <Text style={styles.onProccess}>
              ● <Text>Время ожидания очереди</Text>
            </Text>
            <Text style={styles.onProccess}>
              ● <Text>Отсутствие условий для лицо с ограниченными возможностями</Text>
            </Text>
          </View>
          <View style={styles.process}>
            <Text style={styles.inProccess}>Комментарий</Text>
            <Text style={styles.onProccess}>Ужасное поведение менеджера, грубит, тянет время, неуч. Примите меры!</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2019 Digital Agent. Все права принадлежат народу.</Text>
        </View>
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
  footerText: {
    marginTop: 24,
    textAlign: 'center',
    color: '#9E9E9E'
  }
});
