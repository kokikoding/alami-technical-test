import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Animated, TouchableWithoutFeedback} from 'react-native';

import BaseLayout from '../../layout/base';
import {Button} from '../../components';
import styles from './styles';
import {TestCaseThreePropsType} from './types';

const TestCaseThree: React.FC<TestCaseThreePropsType> = ({navigation}) => {
  const counter = useRef(new Animated.Value(0)).current;
  let countInterval: any = useRef(null);
  const [count, setCount] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [intervalID, setInterID] = useState();

  useEffect(() => {
    if (!isPause) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      countInterval = setInterval(() => setCount(old => old + 1), 500);
      setInterID(countInterval);
    } else {
      clearInterval(intervalID);
    }
    return () => {
      clearInterval(countInterval);
    };
  }, [isPause]);

  useEffect(() => {
    Animated.timing(counter, {
      toValue: count,
      duration: 500,
      useNativeDriver: true,
    }).start();
    if (count >= 100) {
      setCount(100);
      clearInterval(countInterval);
    }
  }, [count, counter]);

  return (
    <BaseLayout contentStyle={styles.contentStyle}>
      <View style={styles.contentView}>
        <TouchableWithoutFeedback
          onPressIn={() => setIsPause(true)}
          onPressOut={() => setIsPause(false)}>
          <View style={styles.progressBar}>
            <Animated.View
              style={[styles.progressActive, {width: count * 2}]}
            />
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.percentText}>{count}%</Text>
      </View>
      <View style={styles.buttonView}>
        <Button onPress={() => navigation.goBack()} style={styles.buttonStyle}>
          <View style={styles.backButtonView}>
            <Text style={styles.backText}>Back</Text>
          </View>
        </Button>
      </View>
    </BaseLayout>
  );
};

export default TestCaseThree;
