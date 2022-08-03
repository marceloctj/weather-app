import { RemoteWeatherModel, WeatherModel } from '@data/models/weather-model';
import { OPENWEATHERMAP_ICONS } from '@env';

function convertMsToKm(ms: number): number {
  return ms * 3.6;
}

export function weatherAdapter(
  remoteWeather: RemoteWeatherModel,
): WeatherModel {
  const [weather] = remoteWeather?.weather;
  return {
    id: weather.id,
    description: weather.description,
    icon: `${OPENWEATHERMAP_ICONS}/${weather.icon}@4x.png`,
    temp: {
      main: remoteWeather.main.temp.toFixed(0),
      feelsLike: remoteWeather.main.feels_like.toFixed(0),
      max: remoteWeather.main.temp_max.toFixed(0),
      min: remoteWeather.main.temp_min.toFixed(0),
    },
    pressure:
      remoteWeather.main.grnd_level ||
      remoteWeather.main.sea_level ||
      remoteWeather.main.pressure,
    wind: {
      speedInKm: convertMsToKm(remoteWeather.wind.speed),
      directionDegrees: remoteWeather.wind.deg,
    },
    percentOfClouds: remoteWeather.clouds.all,
    percentOfHumidity: remoteWeather.main.humidity,
  };
}
