import { HttpClient, HttpStatusCode } from '@infra/http';

import faker from '@faker-js/faker';

import { RemoteGeocoding } from './remote-geocoding-service';
import {
  GeocodingModel,
  RemoteGeocodingModel,
} from '@data/models/geocoding-model';

describe('Remote Geocoding Service', () => {
  it('should be defined', () => {
    expect(RemoteGeocoding).toBeDefined();
  });

  describe('getGeocodingByCoord', () => {
    it('should return getcoding by coord correctly when HttpStatusCode is ok', async () => {
      const body: RemoteGeocodingModel[] = [
        {
          name: faker.address.cityName(),
          country: faker.address.countryCode(),
          local_names: {
            pt: faker.address.cityName(),
          },
          lat: Number(faker.address.latitude()),
          lon: Number(faker.address.longitude()),
          state: faker.address.state(),
        },
      ];

      const httpClient: HttpClient = {
        request: jest.fn().mockImplementation(() => ({
          body,
          statusCode: HttpStatusCode.ok,
        })),
      };

      const coord = { lat: body[0].lat, lon: body[0].lon };

      const remoteGeocoding = new RemoteGeocoding(httpClient);

      expect(remoteGeocoding).toBeDefined();

      const matchObject: GeocodingModel[] = [
        {
          city: body[0].name,
          country: body[0].country,
          lat: body[0].lat,
          lon: body[0].lon,
          state: body[0].state,
        },
      ];

      await expect(
        remoteGeocoding.getGeocodingByCoord(coord),
      ).resolves.toMatchObject(matchObject);

      expect(httpClient.request).toBeCalledWith({
        url: '/reverse',
        method: 'get',
        params: coord,
      });
    });

    it('should return getcoding by coord correctly when HttpStatusCode is different of ok', async () => {
      const httpClient: HttpClient = {
        request: jest.fn().mockImplementation(() => ({
          body: null,
          statusCode: HttpStatusCode.serverError,
        })),
      };

      const coord = {
        lat: Number(faker.address.latitude()),
        lon: Number(faker.address.longitude()),
      };

      const remoteGeocoding = new RemoteGeocoding(httpClient);

      expect(remoteGeocoding).toBeDefined();

      await expect(
        remoteGeocoding.getGeocodingByCoord(coord),
      ).resolves.toBeUndefined();

      expect(httpClient.request).toBeCalledWith({
        url: '/reverse',
        method: 'get',
        params: coord,
      });
    });
  });
});
