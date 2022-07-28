import React from 'react';

import {DefaultTheme, ThemeProvider, DarkTheme} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {RootNavigation} from '@ui/navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>
      <RootNavigation />
    </ThemeProvider>
  );
};

export default App;
