import React from 'react';
import { renderWithTheme } from '@presentation/utils/test-utils';

import { Tag } from './Tag';

describe('Tag Component', () => {
  it('should be defined', () => {
    expect(Tag).toBeDefined();
  });

  it('should render correctly', () => {
    const { getByText } = renderWithTheme(<Tag text="Tag" />);
    expect(getByText('Tag')).toBeTruthy();
  });
});
