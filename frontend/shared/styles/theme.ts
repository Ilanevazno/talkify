import { IMainTheme } from './interfaces';

const mainTheme: IMainTheme = {
  typography: {
    fontName: 'Montserrat, Arial, sans-serif',
    secondaryFontName: '"Open Sans", Arial, sans-serif',
    fontSize: '14px',
  },
  colors: {
    neutral: {
      white: '#FFFFFF',
      darken: '#C2C2C2',
      darkest: '#2d2d2d',
      darkly: '#535050',
      background: '#8a8192',
      backgroundDark: '#757474',
      fullBlack: '#373636',
    },
    primary: {
      background: '#C4D5ED',
      main: '#83B5FF',
      darken: '#749BD4',
      darkest: '#405B84',
    },
    secondary: {
      background: '#C9BDDD',
      main: '#BB8BE0',
      darken: '#8F58A3',
      darkest: '#8B3998',
    },
    statuses: {
      error: '#EB5F67',
      warning: '#E5C674',
      success: '#69D967',
    },
  },
  shadows: {
    main: '4px 5px 1px #54545499',
  },
};

export { mainTheme };
