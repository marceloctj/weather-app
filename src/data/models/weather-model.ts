export interface RemoteWeatherModel {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
}
export interface RemoteWeatherOneCallModel {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: {
    
  };
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
