import {
  RemoteWeatherOneCallModel,
  WeatherCollection,
} from '@data/models/weather-model';
import { OPENWEATHERMAP_ICONS } from '@env';

function convertMsToKm(ms: number): number {
  return ms * 3.6;
}

export function weatherCollectionAdapter(
  remoteWeather: RemoteWeatherOneCallModel,
): WeatherCollection {
  const { current } = remoteWeather;
  const [weather] = current.weather;
  const [firstDaily] = remoteWeather?.daily;
  return {
    today: {
      id: weather.id,
      description: weather.description,
      icon: `${OPENWEATHERMAP_ICONS}/${weather.icon}@4x.png`,
      temp: {
        main: current.temp.toFixed(0),
        feelsLike: current.feels_like.toFixed(0),
        max: firstDaily.temp.max.toFixed(0),
        min: firstDaily.temp.min.toFixed(0),
      },
      pressure: current.pressure,
      wind: {
        speedInKm: convertMsToKm(current.wind_speed),
        directionDegrees: current.wind_deg,
      },
      percentOfClouds: current.clouds,
      percentOfHumidity: current.humidity,
    },
    hourly: [],
    daily: [],
  };
}
