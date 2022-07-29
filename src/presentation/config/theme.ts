import { DefaultTheme } from 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: IPalette;
      secondary: IPalette;
      background: IPalette;
    };
  }
}

const makePalette = (main: string, contrastText: string) => ({
  main,
  contrastText,
});

export const theme: { [k: string]: DefaultTheme } = {
  default: {
    palette: {
      primary: makePalette('#0b3656', '#fff'),
      secondary: makePalette('#0b3656', '#fff'),
      background: makePalette('#f5f5f5', '#000'),
    },
  },
};
