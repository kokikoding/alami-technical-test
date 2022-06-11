import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../themes';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    marginBottom: 8,
    borderRadius: 4,
  },
  label: {
    color: Colors.primary,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  deleteButton: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: Colors.primary,
  },
  deleteText: {
    color: Colors.white,
    fontSize: 16,
    padding: 8,
  },
  buttonView: {
    backgroundColor: Colors.secondary,
    width: width - 32,
    left: 16,
    position: 'absolute',
    bottom: 0,
  },
  buttonStyle: {
    marginBottom: 16,
  },
  addButton: {
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  addText: {
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
