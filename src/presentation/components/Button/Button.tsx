import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled, { DefaultTheme } from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Text from '../Text';

type Props = {
  text: string;
  variant?: keyof DefaultTheme['palette'];
  iconName?: string;
} & TouchableOpacityProps;

export const Container = styled.TouchableOpacity<Props>`
  background-color: ${({ theme, variant }) => theme.palette[variant].main};
  padding: 12px 32px;
  border-radius: 30px;
  justify-content: center;
  flex-direction: row;
`;

export const StyledIcon = styled(Icon).attrs({
  size: 20,
})<Pick<Props, 'variant'>>`
  color: ${({ theme, variant }) => theme.palette[variant].contrastText};
  margin-right: 4px;
`;

export const Button: React.FC<Props> = ({
  text,
  variant = 'primary',
  iconName,
  ...rest
}) => {
  return (
    <Container variant={variant} {...rest}>
      {Boolean(iconName) && <StyledIcon variant={variant} name={iconName} />}
      <Text scale="button" font="bold" variant={variant} useContrast>
        {text}
      </Text>
    </Container>
  );
};
