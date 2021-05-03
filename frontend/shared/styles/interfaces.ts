export interface IMainTheme {
  typography: {
    fontName: string,
    secondaryFontName: string,
    fontSize: string,
  },
  colors: {
    neutral: {
      white: string,
      darken: string,
      darkest: string,
      darkly: string,
      background: string,
      backgroundDark: string,
      fullBlack: string,
    },
    primary: {
      background: string,
      main: string,
      darken: string,
      darkest: string,
    },
    secondary: {
      background: string,
      main: string,
      darken: string,
      darkest: string,
    },
    statuses: {
      error: string,
      warning: string,
      success: string,
    }
  },
  shadows: {
    main: string,
  }
}

export interface IThemes {
  theme: IMainTheme,
}
