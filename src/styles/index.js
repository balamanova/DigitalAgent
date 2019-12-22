import { Dimensions, StyleSheet } from 'react-native';
import { black25Color, mainYellowColor, fontSize12, fontSize4, black65Color, fontSize20, fontSize14, backgroundColor } from '../constants';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  fontSize18: {
    fontSize: 18
  },
  fontSize14: {
    fontSize: 14
  },
  fontColorWhite: {
    color: 'white'
  },
  black65Color: {
    color: black65Color
  },
  fontColorMainColor: {
    color: mainYellowColor
  },
  container: {
    backgroundColor: backgroundColor
  },
  mainContainer: {
    margin: width * 0.06,
    marginBottom: 60
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: backgroundColor
  },
  fontColorBlack25AlignCenter: {
    color: black25Color
  },
  headerStyle: {
    backgroundColor: '#343434',
    justifyContent: 'center'
  },
  rowStartContainers: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginVertical: fontSize12
  },
  columnStartContainers: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginVertical: fontSize12
  },
  typeText: {
    color: '#8c8c8c',
    fontSize: fontSize14,
    marginBottom: fontSize4 * 0.5
  },
  type: {
    color: '#8c8c8c',
    marginTop: fontSize4 * 0.5,
    marginBottom: fontSize4,
    fontSize: fontSize20
  }
});

export default styles;
