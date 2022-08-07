import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';

import Text from '../Text';

type Props = {
  text: string;
  variant?: keyof DefaultTheme['palette'];
} & TouchableOpacityProps;

export const Container = styled.TouchableOpacity<Props>`
  background-color: ${({ theme, variant }) => theme.palette[variant].main};
  padding: 12px 32px;
  border-radius: 30px;
  align-items: center;
`;

export const Button: React.FC<Props> = ({
  text,
  variant = 'primary',
  ...rest
}) => {
  return (
    <Container variant={variant} {...rest}>
      <Text scale="button" font="bold" variant={variant} useContrast>
        {text}
      </Text>
    </Container>
  );
};
