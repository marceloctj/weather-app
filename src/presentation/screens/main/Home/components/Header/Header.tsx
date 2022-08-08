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
import { capitalize } from '@presentation/utils/string';

type Props = {
  onRefresh: () => void;
};

export const Header: React.FC<Props> = ({ onRefresh }) => {
  const geocoding = useAppSelector(state => state.home.geocoding);
  const weather = useAppSelector(state => state.home.weather?.today);
  const loading = useAppSelector(state => state.home.loading);

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
        {!loading && weather && (
          <Button text="Recarregar" onPress={onRefresh} iconName="refresh" />
        )}
        {weather && (
          <WeatherImageContainer>
            <WeatherImage
              testID="header-weather-image"
              source={weather.icon}
              resizeMode="contain"
            />
          </WeatherImageContainer>
        )}
      </RightContent>
    </Container>
  );
};
