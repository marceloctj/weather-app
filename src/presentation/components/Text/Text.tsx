import React, { PropsWithChildren } from 'react';
import { TextProps } from 'react-native';
import { DefaultTheme } from 'styled-components';
import styled from 'styled-components/native';

type Props = PropsWithChildren<{
  font?: keyof DefaultTheme['fonts'];
  variant?: keyof DefaultTheme['palette'];
  scale?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'button';
  useContrast?: boolean;
  align?: 'left' | 'center' | 'right';
}> &
  TextProps;

const scales: { [key in Props['scale']]: number } = {
  h1: 96,
  h2: 60,
  h3: 48,
  h4: 34,
  h5: 24,
  h6: 20,
  body1: 16,
  body2: 14,
  button: 14,
};

const StyledText = styled.Text<Props>`
  font-family: ${({ font, theme }) => theme.fonts[font] || theme.fonts.regular};
  color: ${({ variant, theme, useContrast }) =>
    (theme.palette[variant] || theme.palette.primary)?.[
      useContrast ? 'contrastText' : 'main'
    ]};
  font-size: ${({ scale }) => scales[scale || 'body1']}px;
  text-align: ${({ align }) => align || 'left'};
`;

export const Text: React.FC<Props> = ({ children, ...textProps }) => (
  <StyledText {...textProps}>{children}</StyledText>
);
