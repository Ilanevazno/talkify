import { IThemes } from '@/shared/styles/interfaces';
import styled from 'styled-components';

export const Wrapper = styled.button`
  color: white;
  cursor: pointer;
  width: 250px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 25px;
  padding: 10px;
  background: ${({ theme }: IThemes) => theme.colors.primary.main};
  font-family: ${({ theme }: IThemes) => theme.typography.fontName};

  &:hover {
    background: ${({ theme }: IThemes) => theme.colors.primary.darken};
  }
`;
