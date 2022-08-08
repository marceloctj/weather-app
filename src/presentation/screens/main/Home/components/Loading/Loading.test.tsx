import React from 'react';

import { renderWithProviders } from '@presentation/utils/test-utils';
import { HomeState } from '@presentation/store/reducers/home';

import { Loading } from './Loading';

describe('Home Loading Component', () => {
  it('should be defined', () => {
    expect(Loading).toBeDefined();
  });

  it('should render correctly when redux state home.loading is true', () => {
    const homeMock: HomeState = {
      geocoding: null,
      weather: null,
      loading: true,
    };

    const { getByText } = renderWithProviders(<Loading />, {
      preloadedState: { home: homeMock },
    });

    expect(getByText('Obtendo informações')).toBeTruthy();
  });

  it('should no render when redux state home.loading is true', () => {
    const homeMock: HomeState = {
      geocoding: null,
      weather: null,
      loading: false,
    };

    const { queryByText } = renderWithProviders(<Loading />, {
      preloadedState: { home: homeMock },
    });

    expect(queryByText('Obtendo informações')).toBeFalsy();
  });
});
