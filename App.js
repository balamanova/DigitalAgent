import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AppDrawerNavigator from './src/navigation/AppDrawerNavigator'
import Login from './src/screens/Login'

// const AppStackNavigator = createStackNavigator({
//   Login: {
//     screen: Login,
//     navigationOptions: {
//       header: null,
//       headerMode: 'screen',
//     }
//   },
//   Home: {
//     screen: AppDrawerNavigator,
//     navigationOptions: {
//       header: null,
//     }
//   },
// });


export default createAppContainer(AppDrawerNavigator);