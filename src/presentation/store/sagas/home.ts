import { AnyAction } from 'redux';
import { all, call, takeLatest, put } from 'redux-saga/effects';

import { CoordModel, GeocodingModel, WeatherModel } from '@data/models';
import { RemoteWeatherService } from '@data/services/remote-weather-service';

import { Types } from '@presentation/store/actions/home';
import { RemoteGeocodingService } from '@data/services/remote-geocoding-service';

function* loadWeatherData({ payload }: AnyAction) {
  const coord = payload.coord as CoordModel;

  const weatherData: WeatherModel = yield call(
    RemoteWeatherService.getWeatherByCoord,
    coord,
  );

  if (weatherData) {
    yield put({
      type: Types.SET_WEATHER_DATA,
      payload: { weatherData },
    });
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
      payload: { geocodingData: geocodingData },
    });
  }
}

export function* homeSaga() {
  yield all([
    takeLatest(Types.ASYNC_LOAD_WEATHER_DATA, loadWeatherData),
    takeLatest(Types.ASYNC_LOAD_GEOLOCATION_DATA, loadGeolocationData),
  ]);
}
