import { IThemes } from '@/shared/styles/interfaces';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

export const LoadingSpinner = styled(CircularProgress)``;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    color: ${({ theme }: IThemes) => theme.colors.neutral.background};
  }
`;
