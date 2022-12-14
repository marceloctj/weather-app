import { AnyAction } from 'redux';
import { all, call, takeLatest, put } from 'redux-saga/effects';

import { CoordModel, GeocodingModel, WeatherCollection } from '@data/models';
import { RemoteWeatherService } from '@data/services/remote-weather-service';

import { setLoading, Types } from '@presentation/store/actions/home';
import { RemoteGeocodingService } from '@data/services/remote-geocoding-service';

function* loadWeatherData({ payload }: AnyAction) {
  const coord = payload.coord as CoordModel;

  const weatherData: WeatherCollection = yield call(
    RemoteWeatherService.getWeatherCollectionByCoord,
    coord,
  );

  if (weatherData) {
    yield put({ type: Types.SET_WEATHER_DATA, payload: weatherData });
  }
}

function* loadGeolocationData({ payload }: AnyAction) {
  const coord = payload.coord as CoordModel;

  const [geocodingData]: GeocodingModel[] = yield call(
    RemoteGeocodingService.getGeocodingByCoord,
    coord,
  );

  if (geocodingData) {
    yield put({ type: Types.SET_GEOLOCATION_DATA, payload: geocodingData });
  }
}

function* loadHomeData(action: AnyAction) {
  yield put(setLoading(true));
  yield all([call(loadWeatherData, action), call(loadGeolocationData, action)]);
  yield put(setLoading(false));
}

export function* homeSaga() {
  yield all([
    takeLatest(Types.ASYNC_LOAD_HOME_DATA, loadHomeData),
    // takeLatest(Types.ASYNC_LOAD_WEATHER_DATA, loadWeatherData),
    // takeLatest(Types.ASYNC_LOAD_GEOLOCATION_DATA, loadGeolocationData),
  ]);
}
