import { IThemes } from '@/shared/styles/interfaces';
import styled from 'styled-components';

export const InputField = styled.input`
  border-radius: 7px;
  outline: none;
  width: 40%;
  height: 40px;
  margin-bottom: 10px;
  background: ${({ theme }: IThemes) => theme.colors.neutral.darkest};
  color: ${({ theme }: IThemes) => theme.colors.neutral.darken};
  padding: 0 10px;

  &::placeholder {
    color: ${({ theme }: IThemes) => theme.colors.neutral.darken};
  }

  &:hover {
    background: ${({ theme }: IThemes) => theme.colors.neutral.darkly};
  }
`;
