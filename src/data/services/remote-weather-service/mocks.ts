export const remoteWeatherMock = {
  coord: {
    lon: -43.3003,
    lat: -22.7502,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'nublado',
      icon: '04n',
    },
  ],
  base: 'stations',
  main: {
    temp: 23.16,
    feels_like: 23.33,
    temp_min: 21.98,
    temp_max: 25.01,
    pressure: 1015,
    humidity: 69,
  },
  visibility: 10000,
  wind: {
    speed: 2.06,
    deg: 60,
  },
  clouds: {
    all: 75,
  },
  dt: 1648436811,
  sys: {
    type: 1,
    id: 8376,
    country: 'BR',
    sunrise: 1648457977,
    sunset: 1648501002,
  },
  timezone: -10800,
  id: 3464374,
  name: 'Duque de Caxias',
  cod: 200,
};
