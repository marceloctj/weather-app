import {
  GeocodingModel,
  RemoteGeocodingModel,
} from '@data/models/geocoding-model';

export function geocodingAdapter(
  remoteGeocoding: RemoteGeocodingModel,
): GeocodingModel {
  return {
    city: remoteGeocoding.name,
    country: remoteGeocoding.country,
    lat: remoteGeocoding.lat,
    lon: remoteGeocoding.lon,
    state: remoteGeocoding.state,
  };
}
