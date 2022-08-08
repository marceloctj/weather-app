import { CoordModel } from '@data/models';

export const Types = {
  SET_WEATHER_DATA: '@home/SET_WEATHER_DATA',
  SET_GEOLOCATION_DATA: '@home/SET_GEOLOCATION_DATA',
  SET_LOADING: '@home/SET_LOADING',

  ASYNC_LOAD_HOME_DATA: '@home/ASYNC_LOAD_HOME_DATA',
};

export const loadHomeData = (coord: CoordModel) => ({
  type: Types.ASYNC_LOAD_HOME_DATA,
  payload: { coord },
});

export const setLoading = (loading: boolean) => ({
  type: Types.SET_LOADING,
  payload: loading,
});
