import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type BasePropsType = {
  children: ReactNode;
  containerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
};
