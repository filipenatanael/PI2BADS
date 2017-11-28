import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAECEE',
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#29088A',
  },
  content: {
    flex: 10
  },
  img: {
    width: width / 10,
    height: height / 14,
  },
  icon: {
    justifyContent: 'center',
    marginLeft: 10
  }
});

export default styles;
