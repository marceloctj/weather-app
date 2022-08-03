export interface RemoteWeatherModel {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

type RemoteHourlyWeatherModel = Omit<
  RemoteWeatherModel,
  'sunrise' | 'sunset'
> & {
  wind_gust: number;
  pop: number;
  rain?: {
    [key: string]: number;
  };
};

type RemoteDailyWeatherModel = Omit<RemoteWeatherModel, 'temp'> & {
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  wind_gust: number;
  pop: number;
  rain: number;
};
export interface RemoteWeatherOneCallModel {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: RemoteWeatherModel;
  hourly: RemoteHourlyWeatherModel[];
  daily: RemoteDailyWeatherModel[];
}

export interface WeatherModel {
  id: number;
  icon: string;
  description: string;
  temp: {
    main: string;
    feelsLike: string;
    max: string;
    min: string;
  };
  pressure: number;
  percentOfHumidity: number;
  percentOfClouds: number;
  wind: {
    speedInKm: number;
    directionDegrees: number;
  };
}
