import {
  RemoteWeatherOneCallModel,
  WeatherCollection,
} from '@data/models/weather-model';

function convertMsToKm(ms: number): number {
  return ms * 3.6;
}

const icons = {
  '01d': require('@assets/images/weather/01d.png'),
  '01n': require('@assets/images/weather/01n.png'),
  '02d': require('@assets/images/weather/02d.png'),
  '02n': require('@assets/images/weather/02n.png'),
  '03d': require('@assets/images/weather/03d.png'),
  '03n': require('@assets/images/weather/03n.png'),
  '04d': require('@assets/images/weather/04d.png'),
  '04n': require('@assets/images/weather/04n.png'),
  '09d': require('@assets/images/weather/09d.png'),
  '09n': require('@assets/images/weather/09n.png'),
  '10d': require('@assets/images/weather/10d.png'),
  '10n': require('@assets/images/weather/10n.png'),
  '11d': require('@assets/images/weather/11d.png'),
  '11n': require('@assets/images/weather/11n.png'),
  '13d': require('@assets/images/weather/13d.png'),
  '13n': require('@assets/images/weather/13n.png'),
  '50d': require('@assets/images/weather/50d.png'),
  '50n': require('@assets/images/weather/50n.png'),
};

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
    icon: icons[weather.icon as keyof typeof icons],
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
