import React from 'react';

import { Container, Item, TextHour, TextTemp, MiniImage } from './styles';

import { useAppSelector } from '@presentation/store/hooks';
import { ActivityIndicator } from 'react-native';

export const WeatherHourlyPanel: React.FC = () => {
  const hourlyForecast = useAppSelector(state => state.home.weather?.hourly);

  const makeHourString = (date: Date) => {
    const hour = date.getHours();
    const period = hour > 12 ? 'PM' : 'AM';
    return `${hour.toString().padStart(2, '0')} ${period}`;
  };

  return (
    <Container>
      {hourlyForecast ? (
        hourlyForecast.map((item, index: number) => (
          <Item key={index}>
            <TextHour>{makeHourString(item.datetime)}</TextHour>
            <MiniImage source={{ uri: item.icon }} />
            <TextTemp>{item.temp?.main}</TextTemp>
          </Item>
        ))
      ) : (
        <ActivityIndicator />
      )}
    </Container>
  );
};
