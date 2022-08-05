import { HttpClient, HttpStatusCode } from '@infra/http';
import { OPENWEATHERMAP_API_WEATHER, OPENWEATHERMAP_KEY } from '@env';
import {
  CoordModel,
  RemoteWeatherOneCallModel,
  WeatherCollection,
} from '@data/models';
import { weatherCollectionAdapter } from '@data/adapters/weather-collection-adapter';

export class RemoteWeather {
  constructor(private httpClient: HttpClient) {}

  getWeatherCollectionByCoord = async (
    coord: CoordModel,
  ): Promise<WeatherCollection | undefined> => {
    const { body, statusCode } =
      await this.httpClient.request<RemoteWeatherOneCallModel>({
        url: '/onecall',
        method: 'get',
        params: { ...coord, exclude: 'minutely' },
      });

    if (statusCode === HttpStatusCode.ok && body) {
      return weatherCollectionAdapter(body);
    }
  };
}

const remoteWeather = new RemoteWeather(
  new HttpClient(OPENWEATHERMAP_API_WEATHER, {
    params: {
      appid: OPENWEATHERMAP_KEY,
      units: 'metric',
      lang: 'pt_br',
    },
  }),
);

export { remoteWeather as RemoteWeatherService };
