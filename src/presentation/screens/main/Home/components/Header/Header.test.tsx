import React from 'react';
import { renderWithProviders, fireEvent } from '@presentation/utils/test-utils';

import { Header } from './Header';
import { getGeocodingMock } from '@data/models/geocoding-model.mock';
import { getWeatherCollectionMock } from '@data/models/weather.model.mock';
import { capitalize } from '@presentation/utils/string';
import { HomeState } from '@presentation/store/reducers/home';

describe('Header Component', () => {
  it('should be defined', () => {
    expect(Header).toBeDefined();
  });

  it('should render correctly with all data and onRefresh called when Recarregar is pressed', () => {
    const onRefresh = jest.fn();

    const homeMock = {
      geocoding: getGeocodingMock(),
      weather: getWeatherCollectionMock(),
      loading: false,
    }

    const { getByText, getByTestId } = renderWithProviders(<Header onRefresh={onRefresh} />, {
      preloadedState: {
        home: homeMock
      }
    });

    expect(getByText(homeMock.geocoding.city)).toBeTruthy();
    expect(getByText(`${homeMock.weather.today.temp.main}º`)).toBeTruthy();
    expect(getByText(capitalize(homeMock.weather.today.description))).toBeTruthy();
    expect(getByTestId('header-weather-image')).toBeTruthy();

    const button = getByText('Recarregar');
    expect(button).toBeTruthy();

    expect(onRefresh).toBeCalledTimes(0);
    fireEvent.press(button);
    expect(onRefresh).toBeCalledTimes(1);
  });


  it('should render correctly without refresh button when loading is true', () => {
    const onRefresh = () => {};

    const homeMock: HomeState = {
      geocoding: getGeocodingMock(),
      weather: getWeatherCollectionMock(),
      loading: true,
    }

    const { queryByText } = renderWithProviders(<Header onRefresh={onRefresh} />, {
      preloadedState: {
        home: homeMock
      }
    });

    expect(queryByText('Recarregar')).toBeFalsy();
  });


  it('should render correctly without weather image when weather is null', () => {
    const onRefresh = () => {};

    const homeMock: HomeState = {
      geocoding: getGeocodingMock(),
      weather: null,
      loading: true,
    }

    const { queryByTestId } = renderWithProviders(<Header onRefresh={onRefresh} />, {
      preloadedState: {
        home: homeMock
      }
    });

    expect(queryByTestId('header-weather-image')).toBeFalsy();
  });
});
