import { CoordModel } from '@data/models';
import { useEffect, useState } from 'react';

import { GeolocationClient } from './geolocation-client';

enum Errors {
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  LOCATION_UNAVAILABLE = 'LOCATION_UNAVAILABLE',
}

export function useGeolocation() {
  const [coord, setCoord] = useState<CoordModel>(null);
  const [error, setError] = useState<string>(null);

  const getCurrentPosition = async () => {
    const client = new GeolocationClient();
    if (await client.requestPermission()) {
      try {
        const position = await client.getCurrentPosition();
        setCoord(position);
      } catch (err) {
        throw new Error(Errors.LOCATION_UNAVAILABLE);
      }
    } else {
      throw new Error(Errors.PERMISSION_DENIED);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        await getCurrentPosition();
      } catch (err: any) {
        setError(err.message);
      }
    })();
  }, []);

  return { coord, error, reload: getCurrentPosition };
}
