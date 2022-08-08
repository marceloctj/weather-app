import { HttpClient, HttpStatusCode } from '@infra/http';

import { RemoteWeather } from './remote-weather-service';

import { remoteWeatherMock } from './mocks';
import { weatherCollectionAdapter } from '@data/adapters/weather-collection-adapter';
import { faker } from '@faker-js/faker';

describe('Remote Weather Service', () => {
  it('should be defined', () => {
    expect(RemoteWeather).toBeDefined();
  });

  it('should return weather data by location correctly when HttpStatusCode is ok', async () => {
    const body = { ...remoteWeatherMock };

    const httpClient: HttpClient = {
      request: jest.fn().mockImplementation(() => ({
        body,
        statusCode: HttpStatusCode.ok,
      })),
    };

    const remoteGeocoding = new RemoteWeather(httpClient);

    expect(remoteGeocoding).toBeDefined();

    const matchObject = weatherCollectionAdapter(body);

    const coord = { lat: body.lat, lon: body.lon };

    await expect(
      remoteGeocoding.getWeatherCollectionByCoord(coord),
    ).resolves.toMatchObject(matchObject);

    expect(httpClient.request).toBeCalledWith({
      url: '/onecall',
      method: 'get',
      params: {
        ...coord,
        exclude: 'minutely',
      },
    });
  });

  it('should return weather collection by location correctly when HttpStatusCode is different of ok', async () => {
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

    const remoteGeocoding = new RemoteWeather(httpClient);

    await expect(
      remoteGeocoding.getWeatherCollectionByCoord(coord),
    ).resolves.toBeUndefined();

    expect(httpClient.request).toBeCalledWith({
      url: '/onecall',
      method: 'get',
      params: {
        ...coord,
        exclude: 'minutely',
      },
    });
  });
});
