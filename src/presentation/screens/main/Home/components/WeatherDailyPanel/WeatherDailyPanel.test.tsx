import React from 'react';

import { renderWithProviders } from '@presentation/utils/test-utils';
import { HomeState } from '@presentation/store/reducers/home';

import { WeatherDailyPanel } from './WeatherDailyPanel';
import {
  getWeatherCollectionMock,
  getWeatherCollectionWithDailyMock,
} from '@data/models/weather.model.mock';

describe('Home WeatherDailyPanel Component', () => {
  it('should be defined', () => {
    expect(WeatherDailyPanel).toBeDefined();
  });

  it('should render empty list when redux state home.weather.daily is a empty array', () => {
    const homeMock: HomeState = {
      geocoding: null,
      weather: getWeatherCollectionMock(),
      loading: true,
    };

    const { queryAllByTestId } = renderWithProviders(<WeatherDailyPanel />, {
      preloadedState: { home: homeMock },
    });

    expect(queryAllByTestId('weather-daily-item')).toHaveLength(0);
  });

  it('should render list correctly when redux state home.weather.daily is filled', () => {
    const homeMock: HomeState = {
      geocoding: null,
      weather: getWeatherCollectionWithDailyMock(),
      loading: true,
    };

    const { queryAllByTestId } = renderWithProviders(<WeatherDailyPanel />, {
      preloadedState: { home: homeMock },
    });

    const items = queryAllByTestId('weather-daily-item');

    expect(items).toHaveLength(homeMock.weather.daily.length);
  });
});
