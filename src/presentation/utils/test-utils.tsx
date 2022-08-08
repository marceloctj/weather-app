import React from 'react';
import { render } from '@testing-library/react-native';

import { ThemeProvider } from 'styled-components/native';
import { theme } from '@presentation/utils/theme';

const Provider: React.FC<any> = ({ children }) => {
  return <ThemeProvider theme={theme.default}>{children}</ThemeProvider>;
};

const renderWithTheme = (component: React.ReactElement<any>) => {
  return render(component, { wrapper: Provider });
};

export * from '@testing-library/react-native';

export { renderWithTheme as themedRender };
