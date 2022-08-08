import { faker } from '@faker-js/faker';
import { WeatherCollection } from './weather-model';

export const getWeatherCollectionMock = (): WeatherCollection => ({
  daily: [],
  hourly: [],
  today: {
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
  },
});
