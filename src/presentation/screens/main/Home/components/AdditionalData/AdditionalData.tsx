import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components/native';

import { Container, Item, TextHumidity, TextWindy } from './styles';

export const AdditionalData: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Item>
        <Icon
          name="water-outline"
          color={theme.palette.primary.main}
          size={24}
        />
        <TextHumidity>13%</TextHumidity>
      </Item>
      <Item>
        <Icon
          name="weather-windy"
          color={theme.palette.primary.main}
          size={24}
        />
        <TextWindy>9km/h</TextWindy>
      </Item>
    </Container>
  );
};
