import React from 'react';
import { renderWithTheme } from '@presentation/utils/test-utils';

import { Button } from './Button';

describe('Button Component', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('should render correctly', () => {
    const { getByText } = renderWithTheme(<Button text="Button" />);
    expect(getByText('Button')).toBeTruthy();
  });

  it('should render correctly with icon', () => {
    const { getByText, getByTestId } = renderWithTheme(
      <Button text="Button" iconName="refresh" />,
    );

    expect(getByText('Button')).toBeTruthy();
    expect(getByTestId('button-icon')).toBeTruthy();
  });
});
