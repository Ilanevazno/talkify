import { createGlobalStyle } from 'styled-components';
import { IThemes } from './interfaces';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }: IThemes) => theme.colors.neutral.darkest};
  }
`;

export { GlobalStyle };
