import { AnyAction } from 'redux';
import { GeocodingModel, WeatherModel } from '@data/models';
import { Types } from '@presentation/store/actions/home';

type HomeState = {
  weather: WeatherModel;
  geocoding: GeocodingModel;
};

const initialState: HomeState = {
  weather: null,
  geocoding: null,
};

export const homeReducer = (
  state = initialState,
  action: AnyAction,
): HomeState => {
  switch (action.type) {
    case Types.SET_WEATHER_DATA:
      return { ...state, weather: action.payload.weatherData };
    case Types.SET_GEOLOCATION_DATA:
      return { ...state, geocoding: action.payload.geocodingData };
    default:
      return state;
  }
};
