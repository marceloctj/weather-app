import { CoordModel } from '@data/models';
import { PermissionsAndroid, Platform } from 'react-native';

import GeolocationService from 'react-native-geolocation-service';

export class GeolocationClient {
  async getCurrentPosition(): Promise<CoordModel | undefined> {
    return new Promise((resolve, reject) => {
      GeolocationService.getCurrentPosition(
        position => {
          const { coords } = position;
          resolve({ lat: coords.latitude, lon: coords.longitude });
        },
        error => reject(error),
        {
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
        },
      );
    });
  }

  async requestPermission() {
    return await Platform.select({
      ios: this.requestIOSPermission,
      android: this.requestAndroidPermission,
    })();
  }

  private requestIOSPermission = async (): Promise<boolean> => {
    const authorization = await GeolocationService.requestAuthorization(
      'whenInUse',
    );
    return authorization === 'granted';
  };

  private requestAndroidPermission = async (): Promise<boolean> => {
    const result = await PermissionsAndroid.requestMultiple([
      'android.permission.ACCESS_COARSE_LOCATION',
      'android.permission.ACCESS_FINE_LOCATION',
    ]);

    return (
      result['android.permission.ACCESS_COARSE_LOCATION'] === 'granted' ||
      result['android.permission.ACCESS_FINE_LOCATION'] === 'granted'
    );
  };
}
