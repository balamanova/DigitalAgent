import React from 'react';

import { View} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeNavigator from './HomeNavigator';
import HistoryScreen from '../screens/History';
import HelpScreen from '../screens/Help';
import ProfileScreen from '../screens/Profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomerDrawerComponent from './CustomerDrawerComponent';
import Login from '../screens/Login'


const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: () => (
          <View>
            <Icon name="home" size={15} color={'#faad14'} />
          </View>
        ),
        drawerLabel: 'Главный',
        headerMode: 'screen'
      },
      screen: HomeNavigator
    },
    ProfileScreen: {
      navigationOptions: {
        drawerIcon: () => (
          <View>
            <Icon name="account-circle-outline" size={15} color={'#faad14'} />
          </View>
        ),
        drawerLabel: 'Профиль',
        headerMode: 'screen'
      },
      screen: ProfileScreen
    },
    History: {
      navigationOptions: {
        drawerIcon: () => <Icon name="history" size={15} color={'#faad14'} />,
        drawerLabel: 'История',
        headerMode: 'screen'
      },
      screen: HistoryScreen
    },
    Help: {
      navigationOptions: {
        drawerIcon: () => <Icon name="help-circle-outline" size={15} color={'#faad14'} />,
        drawerLabel: 'Помощь',
        headerMode: 'screen'
      },
      screen: HelpScreen
    },
    Logout: {
      navigationOptions: {
        drawerIcon: () => <Icon name="logout" size={15} color={'#faad14'} />,
        drawerLabel: 'Выйти',
        headerMode: 'screen'
      },
      screen: Login
    },
  },
  { 
    initialRouteName: 'Logout',
    order: ['Home', 'ProfileScreen', 'History', 'Help', 'Logout'],
    contentComponent: CustomerDrawerComponent
  }
);
export default AppDrawerNavigator;
