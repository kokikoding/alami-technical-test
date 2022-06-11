import {View, Text} from 'react-native';
import React from 'react';

import BaseLayout from '../../layout/base';
import {Button} from '../../components';
import styles from './styles';
import {HomePropsType} from './types';

const Home: React.FC<HomePropsType> = ({navigation}) => (
  <BaseLayout>
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleHeading}>{'ALAMI\nTechnical Test'}</Text>
        <Text style={styles.subTitle}>By Muhammad Hendra Pranajaya</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate('TestCaseOne')}
          style={styles.buttonStyle}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Test No. 1</Text>
          </View>
        </Button>
        <Button
          onPress={() => navigation.navigate('TestCaseTwo')}
          style={styles.buttonStyle}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Test No. 2</Text>
          </View>
        </Button>
        <Button onPress={() => console.log('3')} style={styles.buttonStyle}>
          <View style={styles.buttonView}>
            <Text style={styles.buttonText}>Test No. 3</Text>
          </View>
        </Button>
      </View>
    </View>
  </BaseLayout>
);

export default Home;
