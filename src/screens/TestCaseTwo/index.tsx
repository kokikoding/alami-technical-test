import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import BaseLayout from '../../layout/base';
import {Button} from '../../components';
import styles from './styles';

import {TestCaseTwoPropsType} from './types';

const baseList: string[] = [
  'Sepatu',
  'Kaos',
  'Kemeja',
  'Laptop',
  'Alat tulis',
  'HP',
];

const TestCaseTwo: React.FC<TestCaseTwoPropsType> = ({navigation}) => {
  const [list, setList] = React.useState(baseList);

  const addNewItem = () => {
    const newItem = 'New Item ' + Math.floor(Math.random() * 100);
    const newList = [...list, newItem];
    setList(newList);
  };

  const removeSelectItem = (value: string) => {
    const newList = list.filter(item => item !== value);
    setList(newList);
  };

  return (
    <BaseLayout>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {list.map((item, idx) => (
          <View key={idx} style={styles.itemView}>
            <Text style={styles.label}>{item}</Text>
            <Button
              onPress={() => removeSelectItem(item)}
              style={styles.deleteButton}>
              <Text style={styles.deleteText}>Hapus</Text>
            </Button>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonView}>
        <Button onPress={() => addNewItem()} style={styles.buttonStyle}>
          <View style={styles.addButton}>
            <Text style={styles.addText}>Tambah Item</Text>
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

export default TestCaseTwo;
