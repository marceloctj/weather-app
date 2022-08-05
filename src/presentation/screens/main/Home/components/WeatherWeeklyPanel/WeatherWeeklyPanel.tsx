import React from 'react';

import {
  Container,
  Item,
  TextDayOfWeek,
  TextTemp,
  MiniImage,
  TempContainer,
} from './styles';

import Text from '@presentation/components/Text';
import { useAppSelector } from '@presentation/store/hooks';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      {dailyForecast &&
        dailyForecast.map((item, index) => (
          <Item key={index}>
            <TextDayOfWeek>{makeDayOfWeek(item.datetime)}</TextDayOfWeek>
            <MiniImage source={item.icon} />
            <TempContainer>
              <TextTemp>
                <Icon name="arrow-down" size={18} />
                {item.temp.min}
              </TextTemp>
              <Text variant="secondary">
                <Icon name="arrow-up" size={18} />
                {item.temp.max}
              </Text>
            </TempContainer>
          </Item>
        ))}
    </Container>
  );
};
