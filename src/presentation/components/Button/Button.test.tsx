import React from 'react';
import { themedRender } from '@presentation/config/test-utils';

import { Button } from './Button';

describe('Button Component', () => {
  it('should be defined', () => {
    expect(Button).toBeDefined();
  });

  it('should render correctly', () => {
    const { getByText } = themedRender(<Button text="Button" />);
    expect(getByText('Button')).toBeTruthy();
  });

  it('should render correctly with icon', () => {
    const { getByText, getByTestId } = themedRender(
      <Button text="Button" iconName="refresh" />,
    );

    expect(getByText('Button')).toBeTruthy();
    expect(getByTestId('button-icon')).toBeTruthy();
  });
});
