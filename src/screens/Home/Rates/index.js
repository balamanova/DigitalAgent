import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import { setCustomText } from 'react-native-global-props';
import { BarChart } from 'react-native-chart-kit';
import Footer from '../../../components/Footer';
import constStyles from '../../../styles';
import { Rating } from 'react-native-ratings';
import BaseText from '../../../components/BaseText';
import { fontSize14, black65Color, fontSize46, fontSize20, fontSize8, fontSize12, backgroundColor, mainYellowColor, width } from '../../../constants';
import Icon from 'react-native-vector-icons/Feather';
import ProgressBarComponent from '../../../components/ProgressBarComponent';
import RatingTable from '../../../components/RatingTable';

const customTextProps = {
  style: {
    fontFamily: 'System'
  }
};

setCustomText(customTextProps);

export default class Rates extends Component {
  render() {
    return (
      <ScrollView style={[constStyles.container]}>
        <View style={[constStyles.mainContainer]}>
          <View>
            <BaseText text={'Рейтинг услугодателя'} />
            <Text style={styles.place}>
              Отображение статистики услугодателя, в разрезе недели, месяца, по сравнению с другими услугодателями и личный рейтинг.
            </Text>
          </View>
          <View style={constStyles.rowStartContainers}>
            <View style={styles.ratesView}>
              <Text style={styles.viewNameText}>Текущий рейтинг</Text>
              <Text style={styles.rateNumber}>3.5</Text>
              <Rating
                type="custom"
                style={{
                  backgroundColor: 'transparent'
                }}
                startingValue={3.5}
                readonly
                ratingCount={5}
                imageSize={20}
              />
              <View style={{ flexDirection: 'row', marginVertical: fontSize8 }}>
                <Icon name="user-check" size={fontSize20} color={'#faad14'} />
                <Text style={styles.head}>241 оценили</Text>
              </View>
            </View>
            <View style={styles.ratesView}>
              <Text style={styles.viewNameText}>Оценки</Text>
              <View
                style={{
                  marginVertical: fontSize8
                }}
              >
                <ProgressBarComponent num={5} result={34} />
                <ProgressBarComponent num={4} result={1} />
                <ProgressBarComponent num={3} result={100} />
                <ProgressBarComponent num={2} result={2} />
                <ProgressBarComponent num={1} result={50} />
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'space-between',
              marginRight: width / 3
            }}
          >
            <Text style={styles.viewNameText}>Рейтинг за:</Text>

            <Text
              style={{
                color: '#595959'
              }}
            >
              Неделя
            </Text>
            <Text
              style={{
                color: '#595959'
              }}
            >
              Месяц
            </Text>
            <Text
              style={{
                color: mainYellowColor
              }}
            >
              Год
            </Text>
          </View>

          <BarChart
            data={{
              labels: [
                'Янв',
                'Фев',
                'Мар',
                'Апр',
                'Май',
                'Июнь',
                'Июль',
                'Авг',
                'Сен'
                // 'Окт',
                // 'Ноя',
                // 'Дек',
              ],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43, 0, 0, 0]
                }
              ]
            }}
            width={width - fontSize20 * 2}
            height={220}
            chartConfig={{
              backgroundGradientFrom: backgroundColor,
              backgroundGradientTo: '#efefef',
              decimalPlaces: 1,
              withInnerLines: false,
              strokeWidth: 100,
              propsForDots: {
                r: '10',
                strokeWidth: '2',
                stroke: '#ffff'
              },
              propsForLabels: {
                color: 'red',
                backgroundColor: mainYellowColor,
                padding: 10
              },
              propsForBackgroundLines: {
                backgroundColor: mainYellowColor
              },
              barPercentage: 0.4,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                // borderRadius: 16,
                strokeWidth: 10,
                marginVertical: 8
              }
            }}
            style={{
              marginVertical: 8
            }}
          />
          <Text style={styles.viewNameText}>Рейтинг по категории</Text>
          <RatingTable />
        </View>
        <Footer />
      </ScrollView>
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
    marginLeft: fontSize8,
    color: black65Color
  },
  place: {
    fontSize: fontSize14,
    marginVertical: 6,
    color: '#595959'
  },
  viewNameText: {
    fontSize: fontSize14,
    lineHeight: 18,
    color: black65Color,
    fontWeight: '900'
  },

  rateNumber: {
    // fontFamily: 'SFProDisplay-Regular',
    fontSize: fontSize46,
    color: black65Color
  },
  ratesView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
});
