import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../themes';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  contentStyle: {
    alignItems: 'center',
  },
  contentView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: Colors.primary,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonView: {
    backgroundColor: Colors.secondary,
    width: width - 32,
    position: 'absolute',
    bottom: 0,
  },
  buttonStyle: {
    marginBottom: 16,
  },
  getDeviceIdButton: {
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  getDeviceIdText: {
    color: Colors.white,
  },
  backButtonView: {
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  backText: {
    color: Colors.primary,
  },
});

export default styles;
