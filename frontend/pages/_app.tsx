import { GlobalStyle, mainTheme } from '@/shared/styles';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client/react';
import client from '@/services/Api';

const MyApp = ({ Component, pageProps }: any): ReactElement => (
  <>
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  </>
);

export default MyApp;
