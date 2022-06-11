import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../themes';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
    flex: 1,
  },
  titleHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.primary,
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
  },
  buttonStyle: {
    marginBottom: 16,
  },
  buttonView: {
    width: width * 0.5,
    minWidth: 100,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
