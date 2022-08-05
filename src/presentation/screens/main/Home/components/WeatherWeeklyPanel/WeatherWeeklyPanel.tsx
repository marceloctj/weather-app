import React from 'react';

import { Container, Item, TextDayOfWeek, TextTemp, MiniImage } from './styles';

import Text from '@presentation/components/Text';
import { useAppSelector } from '@presentation/store/hooks';
import { ActivityIndicator } from 'react-native';

const daysOfWeek = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sábado',
];

export const WeatherWeeklyPanel: React.FC = () => {
  const dailyForecast = useAppSelector(state => state.home.weather?.daily);

  const makeDayOfWeek = (date: Date) => {
    return daysOfWeek[date.getDay()];
  };

  return (
    <Container>
      {dailyForecast ? (
        dailyForecast.map((item, index) => (
          <Item key={index}>
            <TextDayOfWeek>{makeDayOfWeek(item.datetime)}</TextDayOfWeek>
            <MiniImage source={{ uri: item.icon }} />
            <TextTemp>
              {item.temp.min} <Text variant="secondary">{item.temp.max}</Text>
            </TextTemp>
          </Item>
        ))
      ) : (
        <ActivityIndicator />
      )}
    </Container>
  );
};
