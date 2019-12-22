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

export default class ProcessedComplaints extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
        <View style={{ backgroundColor: '#f5f5f5' }}>
          <View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image style={styles.icons} source={require('../Icons/new.png')} />
              <Text style={styles.header}>Обработанные</Text>
            </View>
            <Text style={styles.place}>Список обработанных жалоб от абонента, с разделенным на сотрудников, которые их обработали</Text>
          </View>
          <View>
            <Text style={styles.employee}>Сотрудник</Text>
            <Text style={styles.employeeName}>Досаев Ержан</Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#f5f5f5',
                marginTop: 24
              }}
            >
              <View
                style={{
                  width: 180,
                  height: 25,
                  borderBottomColor: '#e8e8e8',
                  borderBottomWidth: 1
                }}
              >
                <Text
                  style={{
                    size: 14,
                    marginLeft: 35,
                    color: '#8c8c8c'
                  }}
                >
                  Абонент
                </Text>
              </View>
              <View
                style={{
                  width: 130,
                  height: 25,
                  borderBottomColor: '#e8e8e8',
                  borderBottomWidth: 1
                }}
              >
                <Text style={{ size: 14, color: '#8c8c8c' }}>Рейтинг</Text>
              </View>
              <View
                style={{
                  width: 150,
                  height: 25,
                  borderBottomColor: '#e8e8e8',
                  borderBottomWidth: 1
                }}
              >
                <Text
                  style={{
                    size: 14,
                    marginRight: 35,
                    color: '#8c8c8c'
                  }}
                >
                  Время
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flex: 3,
                  flexDirection: 'column',
                  padding: 5,
                  justifyContent: 'space-between'
                }}
              >
                <View
                  style={{
                    width: 356,
                    height: 50,
                    backgroundColor: 'white',
                    borderColor: '#e0e0e0',
                    borderWidth: 1,
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 8
                  }}
                >
                  <View
                    style={{
                      flex: 3,
                      flexDirection: 'row',
                      padding: 5
                    }}
                  >
                    <Text style={styles.phone}>7702 430 2021</Text>
                    <Rating style={styles.rating} ratingCount={5} imageSize={15} />
                    <Text style={styles.time}>01:34</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 356,
                    height: 50,
                    backgroundColor: 'white',
                    borderColor: '#e0e0e0',
                    borderWidth: 1,
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 8
                  }}
                >
                  <View
                    style={{
                      flex: 3,
                      flexDirection: 'row',
                      padding: 5
                    }}
                  >
                    <Text style={styles.phone}>7702 430 2021</Text>
                    <Rating style={styles.rating} ratingCount={5} imageSize={15} />
                    <Text style={styles.time}>01:34</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 356,
                    height: 50,
                    backgroundColor: 'white',
                    borderColor: '#e0e0e0',
                    borderWidth: 1,
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 8
                  }}
                >
                  <View
                    style={{
                      flex: 3,
                      flexDirection: 'row',
                      padding: 5
                    }}
                  >
                    <Text style={styles.phone}>7702 430 2021</Text>
                    <Rating style={styles.rating} ratingCount={5} imageSize={15} />
                    <Text style={styles.time}>01:34</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.employee}>Сотрудник</Text>
            <Text style={styles.employeeName}>Досаев Ержан</Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#f5f5f5',
                marginTop: 24
              }}
            >
              <View
                style={{
                  width: 180,
                  height: 25,
                  borderBottomColor: '#e8e8e8',
                  borderBottomWidth: 1
                }}
              >
                <Text
                  style={{
                    size: 14,
                    marginLeft: 35,
                    color: '#8c8c8c'
                  }}
                >
                  Абонент
                </Text>
              </View>
              <View
                style={{
                  width: 130,
                  height: 25,
                  borderBottomColor: '#e8e8e8',
                  borderBottomWidth: 1
                }}
              >
                <Text style={{ size: 14, color: '#8c8c8c' }}>Рейтинг</Text>
              </View>
              <View
                style={{
                  width: 150,
                  height: 25,
                  borderBottomColor: '#e8e8e8',
                  borderBottomWidth: 1
                }}
              >
                <Text
                  style={{
                    size: 14,
                    marginRight: 35,
                    color: '#8c8c8c'
                  }}
                >
                  Время
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flex: 3,
                  flexDirection: 'column',
                  padding: 5,
                  justifyContent: 'space-between'
                }}
              >
                <View
                  style={{
                    width: 356,
                    height: 50,
                    backgroundColor: 'white',
                    borderColor: '#e0e0e0',
                    borderWidth: 1,
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 8
                  }}
                >
                  <View
                    style={{
                      flex: 3,
                      flexDirection: 'row',
                      padding: 5
                    }}
                  >
                    <Text style={styles.phone}>7702 430 2021</Text>
                    <Rating style={styles.rating} ratingCount={5} imageSize={15} />
                    <Text style={styles.time}>01:34</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 356,
                    height: 50,
                    backgroundColor: 'white',
                    borderColor: '#e0e0e0',
                    borderWidth: 1,
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 8
                  }}
                >
                  <View
                    style={{
                      flex: 3,
                      flexDirection: 'row',
                      padding: 5
                    }}
                  >
                    <Text style={styles.phone}>7702 430 2021</Text>
                    <Rating style={styles.rating} ratingCount={5} imageSize={15} />
                    <Text style={styles.time}>01:34</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 356,
                    height: 50,
                    backgroundColor: 'white',
                    borderColor: '#e0e0e0',
                    borderWidth: 1,
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 8
                  }}
                >
                  <View
                    style={{
                      flex: 3,
                      flexDirection: 'row',
                      padding: 5
                    }}
                  >
                    <Text style={styles.phone}>7702 430 2021</Text>
                    <Rating style={styles.rating} ratingCount={5} imageSize={15} />
                    <Text style={styles.time}>01:34</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.employee}>Сотрудник</Text>
            <Text style={styles.employeeName}>Досаев Ержан</Text>
          </View>
          <View style={{ marginTop: 5 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: '#f5f5f5',
                marginTop: 24
              }}
            >
              <View
                style={{
                  width: 180,
                  height: 25,
                  borderBottomColor: '#e8e8e8',
                  borderBottomWidth: 1
                }}
              >
                <Text
                  style={{
                    size: 14,
                    marginLeft: 35,
                    color: '#8c8c8c'
                  }}
                >
                  Абонент
                </Text>
              </View>
              <View
                style={{
                  width: 130,
                  height: 25,
                  borderBottomColor: '#e8e8e8',
                  borderBottomWidth: 1
                }}
              >
                <Text style={{ size: 14, color: '#8c8c8c' }}>Рейтинг</Text>
              </View>
              <View
                style={{
                  width: 150,
                  height: 25,
                  borderBottomColor: '#e8e8e8',
                  borderBottomWidth: 1
                }}
              >
                <Text
                  style={{
                    size: 14,
                    marginRight: 35,
                    color: '#8c8c8c'
                  }}
                >
                  Время
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flex: 3,
                  flexDirection: 'column',
                  padding: 5,
                  justifyContent: 'space-between'
                }}
              >
                <View
                  style={{
                    width: 356,
                    height: 50,
                    backgroundColor: 'white',
                    borderColor: '#e0e0e0',
                    borderWidth: 1,
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 8
                  }}
                >
                  <View
                    style={{
                      flex: 3,
                      flexDirection: 'row',
                      padding: 5
                    }}
                  >
                    <Text style={styles.phone}>7702 430 2021</Text>
                    <Rating style={styles.rating} ratingCount={5} imageSize={15} />
                    <Text style={styles.time}>01:34</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 356,
                    height: 50,
                    backgroundColor: 'white',
                    borderColor: '#e0e0e0',
                    borderWidth: 1,
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 8
                  }}
                >
                  <View
                    style={{
                      flex: 3,
                      flexDirection: 'row',
                      padding: 5
                    }}
                  >
                    <Text style={styles.phone}>7702 430 2021</Text>
                    <Rating style={styles.rating} ratingCount={5} imageSize={15} />
                    <Text style={styles.time}>01:34</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: 356,
                    height: 50,
                    backgroundColor: 'white',
                    borderColor: '#e0e0e0',
                    borderWidth: 1,
                    marginLeft: 24,
                    marginRight: 24,
                    marginTop: 8
                  }}
                >
                  <View
                    style={{
                      flex: 3,
                      flexDirection: 'row',
                      padding: 5
                    }}
                  >
                    <Text style={styles.phone}>7702 430 2021</Text>
                    <Rating style={styles.rating} ratingCount={5} imageSize={15} />
                    <Text style={styles.time}>01:34</Text>
                  </View>
                </View>
              </View>
            </View>
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
  employee: {
    fontSize: 18,
    paddingTop: 30,
    paddingLeft: 25,
    color: '#595959'
  },
  employeeName: {
    fontSize: 22,
    paddingTop: 10,
    marginLeft: 70
  },
  icons: {
    width: 24,
    height: 24,
    marginLeft: 24,
    marginTop: 35
  },
  help: {
    fontSize: 16,
    fontSize: 20,
    padding: 20,
    color: 'white',
    textAlign: 'center'
  },
  header: {
    fontSize: 24,
    marginTop: 28,
    marginLeft: 8
  },
  place: {
    fontSize: 14,
    paddingTop: 6,
    marginRight: 90,
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
    color: '#faad14',
    fontSize: 16,
    marginLeft: 140
  },
  pro: {
    textAlign: 'left',
    marginLeft: 17,
    marginTop: 16,
    fontSize: 18,
    color: '#595959'
  },
  proNum: {
    textAlign: 'left',
    marginLeft: 41,
    fontSize: 32,
    color: '#595959'
  },
  head: {
    fontSize: 16,
    marginLeft: 40
  },
  phone: {
    fontSize: 15,
    marginLeft: 15,
    marginTop: 10
  },
  time: {
    marginLeft: 60,
    marginTop: 10
  },
  rating: {
    marginTop: 12,
    marginLeft: 25
  },
  footer: {},
  footerText: {
    marginTop: 24,
    textAlign: 'center',
    color: '#9E9E9E'
  }
});
