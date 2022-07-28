import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {MainStack} from './main';

export function RootNavigation() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
