import React from 'react';

import { renderWithProviders } from '@presentation/utils/test-utils';
import { HomeState } from '@presentation/store/reducers/home';

import { WeatherHourlyPanel } from './WeatherHourlyPanel';
import {
  getWeatherCollectionMock,
  getWeatherCollectionWithHourlyMock,
} from '@data/models/weather.model.mock';

describe('Home WeatherHourlyPanel Component', () => {
  it('should be defined', () => {
    expect(WeatherHourlyPanel).toBeDefined();
  });

  it('should render empty list when redux state home.weather.hourly is a empty array', () => {
    const homeMock: HomeState = {
      geocoding: null,
      weather: getWeatherCollectionMock(),
      loading: true,
    };

    const { queryAllByTestId } = renderWithProviders(<WeatherHourlyPanel />, {
      preloadedState: { home: homeMock },
    });

    expect(queryAllByTestId('weather-hourly-item')).toHaveLength(0);
  });

  it('should render list correctly when redux state home.weather.hourly is filled', () => {
    const homeMock: HomeState = {
      geocoding: null,
      weather: getWeatherCollectionWithHourlyMock(),
      loading: true,
    };

    const { queryAllByTestId } = renderWithProviders(<WeatherHourlyPanel />, {
      preloadedState: { home: homeMock },
    });

    const items = queryAllByTestId('weather-hourly-item');

    expect(items).toHaveLength(homeMock.weather.hourly.length);
  });
});
