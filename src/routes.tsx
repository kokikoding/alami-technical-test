import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/home';
import TestCaseOne from './screens/TestCaseOne';
import TestCaseTwo from './screens/TestCaseTwo';

const Stack = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TestCaseOne" component={TestCaseOne} />
      <Stack.Screen name="TestCaseTwo" component={TestCaseTwo} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
