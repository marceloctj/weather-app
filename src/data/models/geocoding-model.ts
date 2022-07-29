export interface RemoteGeocodingModel {
  name: string;
  local_names: {
    [k: string]: string;
  };
  lat: number;
  lon: number;
  country: string;
  state: string;
}

export interface GeocodingModel {
  city: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}
