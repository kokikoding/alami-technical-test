import {View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {BasePropsType} from './types';
import styles from './styles';

const BaseLayout: React.FC<BasePropsType> = ({
  children,
  containerStyle,
  contentStyle,
}) => (
  <SafeAreaView style={[styles.container, containerStyle]}>
    <View style={[styles.content, contentStyle]}>{children}</View>
  </SafeAreaView>
);

export default BaseLayout;
