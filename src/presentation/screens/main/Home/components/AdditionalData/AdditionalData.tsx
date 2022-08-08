import { useAppSelector } from '@presentation/store/hooks';
import React from 'react';
import { ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components/native';

import { Container, Item, TextHumidity, TextWindy } from './styles';

export const AdditionalData: React.FC = () => {
  const theme = useTheme();
  const weather = useAppSelector(state => state.home.weather?.today);

  const loading = () => <ActivityIndicator accessibilityHint="loading" />;

  return (
    <Container>
      <Item>
        <Icon
          name="water-outline"
          color={theme.palette.primary.main}
          size={24}
        />
        <TextHumidity>{weather?.percentOfHumidity || loading()}%</TextHumidity>
      </Item>
      <Item>
        <Icon
          name="weather-windy"
          color={theme.palette.primary.main}
          size={24}
        />
        <TextWindy>
          {weather?.wind?.speedInKm.toFixed(2) || loading()} km/h
        </TextWindy>
      </Item>
    </Container>
  );
};
