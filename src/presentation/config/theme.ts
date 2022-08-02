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
      black: IPalette;
      white: IPalette;

      lightGray: IPalette;
    };

    fonts: {
      regular: string;
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
      primary: makePalette('#0b3656', '#f5f5f5'),
      secondary: makePalette('#ff73b9', '#f5f5f5'),
      background: makePalette('#fefefe', '#111'),
      black: makePalette('#000', '#f5f5f5'),
      white: makePalette('#f5f5f5', '#111'),

      lightGray: makePalette('#eee', '#111'),
    },
    fonts: {
      regular: 'Lato-Regular',
    },
  },
};
