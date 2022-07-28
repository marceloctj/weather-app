import React from 'react';

import {DefaultTheme, ThemeProvider, DarkTheme} from '@react-navigation/native';
import {RootNavigation} from './src/ui/navigation';
import {useColorScheme} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
      <RootNavigation />
    </ThemeProvider>
  );
};

export default App;
