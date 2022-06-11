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
  progressBar: {
    height: 40,
    flexDirection: 'row',
    width: 200,
    backgroundColor: Colors.white,
    borderColor: Colors.gray,
    borderWidth: 2,
    borderRadius: 4,
    marginBottom: 8,
  },
  progressActive: {
    backgroundColor: Colors.primary,
  },
  percentText: {
    color: Colors.white,
    fontSize: 16,
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
