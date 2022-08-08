import { faker } from '@faker-js/faker';
import { GeocodingModel } from './geocoding-model';

export const getGeocodingMock = (): GeocodingModel => ({
  city: faker.address.city(),
  state: faker.address.state(),
  country: faker.address.country(),
  lat: Number(faker.address.latitude()),
  lon: Number(faker.address.longitude()),
});
