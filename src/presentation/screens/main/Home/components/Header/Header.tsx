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

export const Header: React.FC = () => {
  return (
    <Container>
      <LeftContent>
        <Text scale="h6" variant="primary" numberOfLines={2}>
          São José do Vale do Rio Preto
        </Text>
        <DegressText>32°</DegressText>
        <WeatherTag text="Cloudy" />
      </LeftContent>
      <RightContent>
        <WeatherImage
          source={require('@assets/images/icons/night.png')}
          resizeMode="contain"
        />
      </RightContent>
    </Container>
  );
};
