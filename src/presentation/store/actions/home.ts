import { CoordModel } from '@data/models';

export const Types = {
  SET_WEATHER_DATA: '@home/SET_WEATHER_DATA',
  SET_GEOLOCATION_DATA: '@home/SET_GEOLOCATION_DATA',

  ASYNC_LOAD_WEATHER_DATA: '@home/ASYNC_LOAD_WEATHER_DATA',
  ASYNC_LOAD_GEOLOCATION_DATA: '@home/ASYNC_LOAD_GEOLOCATION_DATA',
};

export const loadWeatherData = (coord: CoordModel) => ({
  type: Types.ASYNC_LOAD_WEATHER_DATA,
  payload: { coord },
});

export const loadGeolocationData = (coord: CoordModel) => ({
  type: Types.ASYNC_LOAD_GEOLOCATION_DATA,
  payload: { coord },
});
