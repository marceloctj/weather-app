import { AnyAction } from 'redux';
import { GeocodingModel, WeatherCollection } from '@data/models';
import { Types } from '@presentation/store/actions/home';

type HomeState = {
  weather: WeatherCollection;
  geocoding: GeocodingModel;
  loading: boolean;
};

const initialState: HomeState = {
  weather: null,
  geocoding: null,
  loading: false,
};

export const homeReducer = (
  state = initialState,
  action: AnyAction,
): HomeState => {
  switch (action.type) {
    case Types.SET_WEATHER_DATA:
      return { ...state, weather: action.payload };
    case Types.SET_GEOLOCATION_DATA:
      return { ...state, geocoding: action.payload };
    case Types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
