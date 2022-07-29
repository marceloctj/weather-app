import React from 'react';

import {
  DefaultTheme,
  ThemeProvider,
  DarkTheme,
} from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';

import { RootNavigation } from '@presentation/navigation';
import { store } from '@presentation/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ReduxProvider store={store}>
      <ThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
        <RootNavigation />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
