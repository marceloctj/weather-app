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
import { ActivityIndicator } from 'react-native';

export const Header: React.FC = () => {
  const geocoding = useAppSelector(state => state.home.geocoding);
  const weather = useAppSelector(state => state.home.weather?.today);

  const capitalize = (str: string) => {
    if (!str) {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const source = require('@assets/images/icons/night.png');

  return (
    <Container>
      <LeftContent>
        <Text scale="h6" variant="primary" numberOfLines={2}>
          {geocoding ? geocoding.city : <ActivityIndicator />}
        </Text>
        <DegressText>
          {weather ? `${weather.temp.main}º` : <ActivityIndicator />}
        </DegressText>
        <WeatherTag text={capitalize(weather?.description)} />
      </LeftContent>
      <RightContent>
        {weather && <WeatherImage source={source} resizeMode="contain" />}
      </RightContent>
    </Container>
  );
};
