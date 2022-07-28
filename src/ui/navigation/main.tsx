import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@ui/screens/main/Home';

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
