import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type ButtonPropsType = {
  style?: ViewStyle;
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
};
