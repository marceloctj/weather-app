import React from 'react';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';
import Text from '@presentation/components/Text';
import { ViewStyle } from 'react-native';

type Props = {
  variant?: keyof DefaultTheme['palette'];
  text: string;
  style?: ViewStyle;
};

export const StyledContainer = styled.View<Props>`
  background-color: ${({ variant, theme }) =>
    theme.palette[variant]?.main || theme.palette.primary.main};
  padding: 8px 16px;
  border-radius: 24px;
`;

export const Tag: React.FC<Props> = ({ variant, text, ...restProps }) => {
  return (
    <StyledContainer variant={variant} {...restProps}>
      <Text variant={variant} useContrast>
        {text}
      </Text>
    </StyledContainer>
  );
};
