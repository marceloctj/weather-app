import { HttpClient, HttpStatusCode } from '@infra/http';
import { OPENWEATHERMAP_API_GEOCODING, OPENWEATHERMAP_KEY } from '@env';
import { GeocodingModel, RemoteGeocodingModel, CoordModel } from '@data/models';

import { geocodingAdapter } from '@data/adapters/geocoding-adapter';
export class RemoteGeocoding {
  constructor(private httpClient: HttpClient) {}

  getGeocodingByCoord = async (
    coord: CoordModel,
  ): Promise<GeocodingModel[] | undefined> => {
    const { body, statusCode } = await this.httpClient.request<
      RemoteGeocodingModel[]
    >({
      url: '/reverse',
      method: 'get',
      params: coord,
    });

    if (statusCode === HttpStatusCode.ok && Array.isArray(body)) {
      return body.map(geocodingAdapter);
    }
  };
}

const remoteGeocoding = new RemoteGeocoding(
  new HttpClient(OPENWEATHERMAP_API_GEOCODING, {
    params: { appid: OPENWEATHERMAP_KEY },
  }),
);

export { remoteGeocoding as RemoteGeocodingService };
