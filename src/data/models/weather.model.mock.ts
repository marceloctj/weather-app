import { faker } from '@faker-js/faker';
import { WeatherCollection, WeatherModel } from './weather-model';

const weatherModelMock = (): WeatherModel => ({
  id: faker.datatype.number(),
  description: faker.random.word(),
  icon: '01d',
  datetime: faker.datatype.datetime(),
  wind: {
    directionDegrees: faker.datatype.number(),
    speedInKm: faker.datatype.number(),
  },
  temp: {
    main: faker.random.numeric(),
    feelsLike: faker.random.numeric(),
    min: faker.random.numeric(),
    max: faker.random.numeric(),
  },
  percentOfClouds: faker.datatype.number({ min: 0, max: 100 }),
  pressure: faker.datatype.number(),
  percentOfHumidity: faker.datatype.number({ min: 0, max: 100 }),
});

export const getWeatherCollectionMock = (): WeatherCollection => ({
  daily: [],
  hourly: [],
  today: weatherModelMock(),
});

export const getWeatherCollectionWithHourlyMock = (): WeatherCollection => ({
  daily: [],
  hourly: Array(5)
    .fill(null)
    .map(() => weatherModelMock()),
  today: weatherModelMock(),
});

export const getWeatherCollectionWithDailyMock = (): WeatherCollection => ({
  daily: Array(5)
    .fill(null)
    .map(() => weatherModelMock()),
  hourly: [],
  today: weatherModelMock(),
});
