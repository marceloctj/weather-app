import React from 'react';
import { themedRender } from '@presentation/config/test-utils';

import { Tag } from './Tag';

describe('Tag Component', () => {
  it('should be defined', () => {
    expect(Tag).toBeDefined();
  });

  it('should render correctly', () => {
    const { getByText } = themedRender(<Tag text="Tag" />);
    expect(getByText('Tag')).toBeTruthy();
  });
});
