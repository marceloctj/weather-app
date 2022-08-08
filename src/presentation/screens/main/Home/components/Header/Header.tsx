import React from 'react';

import Text from '@presentation/components/Text';

import {
  Container,
  DegressText,
  LeftContent,
  WeatherTag,
  RightContent,
  WeatherImage,
  WeatherImageContainer,
} from './styles';
import { useAppSelector } from '@presentation/store/hooks';
import Button from '@presentation/components/Button';

type Props = {
  onRefresh: () => void;
};

export const Header: React.FC<Props> = ({ onRefresh }) => {
  const geocoding = useAppSelector(state => state.home.geocoding);
  const weather = useAppSelector(state => state.home.weather?.today);
  const loaded = useAppSelector(state => state.home.loaded);

  const capitalize = (str: string) => {
    if (!str) {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Container>
      <LeftContent>
        <Text scale="h6" variant="white" numberOfLines={2}>
          {geocoding && geocoding.city}
        </Text>
        <DegressText>{weather && `${weather.temp.main}º`}</DegressText>
        {weather && <WeatherTag text={capitalize(weather?.description)} />}
      </LeftContent>
      <RightContent>
        {loaded && (
          <Button text="Recarregar" onPress={onRefresh} iconName="refresh" />
        )}
        {weather && (
          <WeatherImageContainer>
            <WeatherImage source={weather.icon} resizeMode="contain" />
          </WeatherImageContainer>
        )}
      </RightContent>
    </Container>
  );
};
