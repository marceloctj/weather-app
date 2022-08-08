import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react-native';

import type { PreloadedState } from '@reduxjs/toolkit';

import { ThemeProvider } from 'styled-components/native';
import theme from '@presentation/utils/theme';

import { Provider as ReduxProvider } from 'react-redux';

import { AppStore, RootState, setupStore } from '@presentation/store';
interface ExtendedRenderOptions extends Omit<any, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const ThemeWrapper: React.FC<any> = ({ children }) => {
  return <ThemeProvider theme={theme.default}>{children}</ThemeProvider>;
};

const renderWithTheme = (component: React.ReactElement<any>) => {
  return render(component, { wrapper: ThemeWrapper });
};

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <ThemeWrapper>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </ThemeWrapper>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export * from '@testing-library/react-native';

export { renderWithTheme, renderWithProviders };
