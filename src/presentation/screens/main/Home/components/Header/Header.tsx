import React from 'react';

import Text from '@presentation/components/Text';

import {
  Container,
  DegressText,
  LeftContent,
  WeatherTag,
  RightContent,
  WeatherImage,
} from './styles';
import { useAppSelector } from '@presentation/store/hooks';

export const Header: React.FC = () => {
  const geocoding = useAppSelector(state => state.home.geocoding);
  const weather = useAppSelector(state => state.home.weather?.today);

  const capitalize = (str: string) => {
    if (!str) {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Container>
      <LeftContent>
        <Text scale="h6" variant="primary" numberOfLines={2}>
          {geocoding && geocoding.city}
        </Text>
        <DegressText>{weather && `${weather.temp.main}º`}</DegressText>
        {weather && <WeatherTag text={capitalize(weather?.description)} />}
      </LeftContent>
      <RightContent>
        {weather && (
          <WeatherImage source={{ uri: weather.icon }} resizeMode="contain" />
        )}
      </RightContent>
    </Container>
  );
};
