import { GlobalStyle, mainTheme } from '@/shared/styles';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

const MyApp = ({ Component, pageProps }): ReactElement => (
  <>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default MyApp
