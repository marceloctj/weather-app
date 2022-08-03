import { HttpClient, HttpStatusCode } from '@infra/http';

import { RemoteWeather } from './remote-weather-service';
import { WeatherModel, RemoteWeatherModel } from '@data/models';
import { remoteWeatherMock } from './mocks';
import { weatherAdapter } from '@data/adapters/weather-adapter';
import faker from '@faker-js/faker';

describe('Remote Weather Service', () => {
  it('should be defined', () => {
    expect(RemoteWeather).toBeDefined();
  });

  it('should return weather data by location correctly when HttpStatusCode is ok', async () => {
    const body: RemoteWeatherModel = remoteWeatherMock;

    const httpClient: HttpClient = {
      request: jest.fn().mockImplementation(() => ({
        body,
        statusCode: HttpStatusCode.ok,
      })),
    };

    const remoteGeocoding = new RemoteWeather(httpClient);

    expect(remoteGeocoding).toBeDefined();

    const matchObject: WeatherModel = weatherAdapter(body);

    await expect(
      remoteGeocoding.getWeatherByCoord(body.coord),
    ).resolves.toMatchObject(matchObject);

    expect(httpClient.request).toBeCalledWith({
      url: '/weather',
      method: 'get',
      params: body.coord,
    });
  });

  it('should return getcoding by location correctly when HttpStatusCode is different of ok', async () => {
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
      remoteGeocoding.getWeatherByCoord(coord),
    ).resolves.toBeUndefined();

    expect(httpClient.request).toBeCalledWith({
      url: '/weather',
      method: 'get',
      params: coord,
    });
  });
});
