import React from 'react';
import { renderWithProviders } from '@presentation/utils/test-utils';

import { AdditionalData } from './AdditionalData';
import { getWeatherCollectionMock } from '@data/models/weather.model.mock';
import { HomeState } from '@presentation/store/reducers/home';

describe('Home AdditionalData Component', () => {
  it('should be defined', () => {
    expect(AdditionalData).toBeDefined();
  });

  it('should render correctly with all data', () => {
    const homeMock: HomeState = {
      geocoding: null,
      weather: getWeatherCollectionMock(),
      loading: false,
    };

    const { getByText } = renderWithProviders(<AdditionalData />, {
      preloadedState: {
        home: homeMock,
      },
    });

    const weatherToday = homeMock.weather.today;

    expect(getByText(`${weatherToday.percentOfHumidity}%`)).toBeTruthy();
    expect(
      getByText(`${weatherToday?.wind?.speedInKm.toFixed(2)} km/h`),
    ).toBeTruthy();
  });

  it('should render ActivityIndicators when weather is null', () => {
    const homeMock: HomeState = {
      geocoding: null,
      weather: null,
      loading: false,
    };

    const { getByText, getAllByAccessibilityHint } = renderWithProviders(
      <AdditionalData />,
      {
        preloadedState: {
          home: homeMock,
        },
      },
    );

    expect(getByText('%')).toBeTruthy();
    expect(getByText('km/h')).toBeTruthy();
    expect(getAllByAccessibilityHint('loading')).toHaveLength(2);
  });
});
