import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import UserLibrary from '../screens/UserLibrary';
import Reader from '../screens/Reader';
import Book from '../screens/Book';

const Stack = createStackNavigator();

function LibraryStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Library" component={UserLibrary} />
      <Stack.Screen name="Reader" component={Reader} />
      <Stack.Screen name="Book" component={Book} />
    </Stack.Navigator>
  );
}

export default LibraryStack;
