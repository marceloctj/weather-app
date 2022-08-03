import { HttpClient, HttpStatusCode } from '@infra/http';
import { OPENWEATHERMAP_API_WEATHER, OPENWEATHERMAP_KEY } from '@env';
import { RemoteWeatherModel, CoordModel, WeatherModel } from '@data/models';

import { weatherAdapter } from '@data/adapters/weather-adapter';

export class RemoteWeather {
  constructor(private httpClient: HttpClient) {}

  getWeatherByCoord = async (
    coord: CoordModel,
  ): Promise<WeatherModel | undefined> => {
    const { body, statusCode } =
      await this.httpClient.request<RemoteWeatherModel>({
        url: '/weather',
        method: 'get',
        params: coord,
      });

    if (statusCode === HttpStatusCode.ok && body) {
      return weatherAdapter(body);
    }
  };
}

const remoteWeather = new RemoteWeather(
  new HttpClient(OPENWEATHERMAP_API_WEATHER, {
    params: { appid: OPENWEATHERMAP_KEY, units: 'metric', lang: 'pt_br' },
  }),
);

export { remoteWeather as RemoteWeatherService };
