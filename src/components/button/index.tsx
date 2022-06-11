import {TouchableOpacity} from 'react-native';
import React from 'react';

import {ButtonPropsType} from './types';

const Button: React.FC<ButtonPropsType> = ({
  children,
  onPress,
  style,
  disabled = false,
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={style}
    disabled={disabled}>
    {children}
  </TouchableOpacity>
);

export default Button;
