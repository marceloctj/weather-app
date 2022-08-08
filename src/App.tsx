import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { Provider as ReduxProvider } from 'react-redux';

import { RootNavigation } from '@presentation/navigation';
import store from '@presentation/store';
import theme from '@presentation/utils/theme';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme.default}>
        <RootNavigation />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
