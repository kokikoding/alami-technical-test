import {View, Text, ActivityIndicator, Platform} from 'react-native';
import React from 'react';

import BaseLayout from '../../layout/base';
import {Button} from '../../components';
import styles from './styles';

import {TestCaseOnePropsType} from './types';
import {Colors} from '../../themes';
import NativeDeviceInfoModule from './NativeDeviceInfoModule';

const TestCaseOne: React.FC<TestCaseOnePropsType> = ({navigation}) => {
  const [deviceId, setDeviceId] = React.useState<string | null>(null);
  const [status, setStatus] = React.useState('init');

  const handleGetDeviceId = () => {
    setStatus('loading');
    if (Platform.OS === 'ios') {
      const res = NativeDeviceInfoModule.getDeviceID();
      if (res) {
        setDeviceId(res);
        setStatus('success');
      } else {
        setStatus('failed');
      }
    } else {
      NativeDeviceInfoModule.getDeviceID((e: any, deviceID: string) => {
        if (!e) {
          setDeviceId(deviceID);
          setStatus('success');
        } else {
          setStatus('failed');
        }
      });
    }
  };

  const renderDisplay = () => {
    switch (status) {
      case 'init':
      default:
        return 'Press button below to get Device ID';
      case 'success':
        return `Your Device ID: \n${deviceId}.`;
      case 'failed':
        return 'Sorry, We cannot find your device id. Please try again !';
    }
  };

  return (
    <BaseLayout contentStyle={styles.contentStyle}>
      <View style={styles.contentView}>
        {status !== 'loading' ? (
          <Text style={styles.label}>{renderDisplay()}</Text>
        ) : (
          <ActivityIndicator color={Colors.white} size="large" />
        )}
      </View>
      <View style={styles.buttonView}>
        <Button onPress={() => handleGetDeviceId()} style={styles.buttonStyle}>
          <View style={styles.getDeviceIdButton}>
            <Text style={styles.getDeviceIdText}>Get Device ID</Text>
          </View>
        </Button>
        <Button onPress={() => navigation.goBack()} style={styles.buttonStyle}>
          <View style={styles.backButtonView}>
            <Text style={styles.backText}>Back</Text>
          </View>
        </Button>
      </View>
    </BaseLayout>
  );
};

export default TestCaseOne;
