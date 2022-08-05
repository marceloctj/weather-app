import {
  RemoteWeatherOneCallModel,
  WeatherCollection,
} from '@data/models/weather-model';
import { OPENWEATHERMAP_ICONS } from '@env';

function convertMsToKm(ms: number): number {
  return ms * 3.6;
}

function weatherAdapter(
  weatherData:
    | RemoteWeatherOneCallModel['current']
    | RemoteWeatherOneCallModel['daily'][0]
    | RemoteWeatherOneCallModel['hourly'][0],
) {
  const [weather] = weatherData.weather;
  return {
    id: weather.id,
    description: weather.description,
    icon: `${OPENWEATHERMAP_ICONS}/${weather.icon}@4x.png`,
    pressure: weatherData.pressure,
    wind: {
      speedInKm: convertMsToKm(weatherData.wind_speed),
      directionDegrees: weatherData.wind_deg,
    },
    percentOfClouds: weatherData.clouds,
    percentOfHumidity: weatherData.humidity,
  };
}

export function weatherCollectionAdapter(
  remoteWeather: RemoteWeatherOneCallModel,
): WeatherCollection {
  const firstDaily = remoteWeather?.daily?.shift();

  return {
    today: {
      ...weatherAdapter(remoteWeather.current),
      temp: {
        main: remoteWeather.current.temp.toFixed(0),
        feelsLike: remoteWeather.current.feels_like.toFixed(0),
        max: firstDaily.temp.max.toFixed(0),
        min: firstDaily.temp.max.toFixed(0),
      },
    },
    hourly: remoteWeather.hourly.slice(0, 24).map(item => ({
      ...weatherAdapter(item),
      temp: {
        main: item.temp.toFixed(0),
        feelsLike: item.feels_like.toFixed(0),
      },
      datetime: new Date(item.dt * 1000),
    })),
    daily: remoteWeather.daily.map(item => ({
      ...weatherAdapter(item),
      temp: {
        max: item.temp.max.toFixed(0),
        min: item.temp.min.toFixed(0),
        main: item.temp.day.toFixed(0),
      },
      datetime: new Date(item.dt * 1000),
    })),
  };
}
