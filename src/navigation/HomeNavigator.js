import { createStackNavigator } from 'react-navigation-stack';
import InProcessComplains from '../screens/Home/InProcessComplains';
import HomeScreen from '../screens/Home';
import NewComplaints from '../screens/Home/NewComplaints';
import Process from '../screens/Home/Proccess';
import Success from '../screens/Home/Success';
import Rates from '../screens/Home/Rates';
import ProcessedComplaints from '../screens/Home/ProcessedComplaints';
import styles from '../styles';

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,

    navigationOptions: {
      header: null,
      headerMode: 'screen'
    }
  },
  Rates: {
    screen: Rates,
    navigationOptions: {
      headerTitle: 'Рейтинг',
      headerStyle: styles.headerStyle,
      headerTintColor: styles.fontColorWhite.color,
      headerMode: 'screen'
    }
  },
  NewComplaints: {
    screen: NewComplaints,
    navigationOptions: {
      headerTitle: 'Новые жалобы',
      headerStyle: styles.headerStyle,
      headerTintColor: styles.fontColorWhite.color,
      headerMode: 'screen'
    }
  },
  Process: {
    screen: Process,
    navigationOptions: {
      headerTitle: 'В процессе',
      headerStyle: styles.headerStyle,
      headerTintColor: styles.fontColorWhite.color,
      headerMode: 'screen'
    }
  },
  Success: {
    screen: Success,
    navigationOptions: {
      headerTitle: 'Обработанная жалоба',
      headerStyle: styles.headerStyle,
      headerTintColor: styles.fontColorWhite.color,
      headerMode: 'screen'
    }
  },
  ProcessedComplaints: ProcessedComplaints,
  InProcessComplains: InProcessComplains
});

export default AppStackNavigator;
