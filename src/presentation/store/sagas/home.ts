import { AnyAction } from 'redux';
import { all, call, takeLatest, put } from 'redux-saga/effects';

import { CoordModel, GeocodingModel, WeatherCollection } from '@data/models';
import { RemoteWeatherService } from '@data/services/remote-weather-service';

import { Types } from '@presentation/store/actions/home';
import { RemoteGeocodingService } from '@data/services/remote-geocoding-service';

function* loadWeatherData({ payload }: AnyAction) {
  const coord = payload.coord as CoordModel;

  const weatherData: WeatherCollection = yield call(
    RemoteWeatherService.getWeatherCollectionByCoord,
    coord,
  );

  if (weatherData) {
    yield put({
      type: Types.SET_WEATHER_DATA,
      payload: weatherData,
    });

    yield put({ type: Types.SET_LOADED, payload: true });
  }
}

function* loadGeolocationData({ payload }: AnyAction) {
  const coord = payload.coord as CoordModel;

  const [geocodingData]: GeocodingModel[] = yield call(
    RemoteGeocodingService.getGeocodingByCoord,
    coord,
  );

  if (geocodingData) {
    yield put({
      type: Types.SET_GEOLOCATION_DATA,
      payload: geocodingData,
    });
  }
}

export function* homeSaga() {
  yield all([
    takeLatest(Types.ASYNC_LOAD_WEATHER_DATA, loadWeatherData),
    takeLatest(Types.ASYNC_LOAD_GEOLOCATION_DATA, loadGeolocationData),
  ]);
}
