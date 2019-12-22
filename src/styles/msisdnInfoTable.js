import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  phone: {
    fontSize: 15
  },
  view: {
    height: 50,
    backgroundColor: 'white',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    marginTop: 10,

    paddingHorizontal: width * 0.03
  },
  mainView: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  columnHeaderText: {
    fontSize: 14,
    color: '#8c8c8c'
  },
  tableView: {
    flex: 3,
    flexDirection: 'column',
    paddingVertical: 5,
    justifyContent: 'space-between'
  },
  tableMainView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    marginTop: 24,
    justifyContent: 'space-between',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    paddingHorizontal: width * 0.03
  }
});

export default styles;
