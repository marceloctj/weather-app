import { CoordModel } from '@data/models';
import { useEffect, useState } from 'react';
import { GeolocationClient } from './geolocation-client';

export function useGeolocation() {
  const [coord, setCoord] = useState<CoordModel>(null);
  const [error, setError] = useState<string>(null);

  useEffect(() => {
    (async () => {
      const client = new GeolocationClient();
      setError(null);
      if (await client.requestPermission()) {
        const position = await client.getCurrentPosition();
        if (position) {
          setCoord(position);
        }
      } else {
        setError('Permission denied');
      }
    })();
  }, []);

  return { coord, error };
}
