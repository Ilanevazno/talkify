import { IThemes } from '@/shared/styles/interfaces';
import styled from 'styled-components';

import { lighten } from 'polished';

export const InputField = styled.input`
  border-radius: 7px;
  outline: none;
  height: 40px;
  width: 100%;
  padding: 0 10px;
  font-size: 17px;
  background: ${({ theme }: IThemes) => lighten(0.2, theme.colors.neutral.darkest)};
  color: ${({ theme }: IThemes) => theme.colors.neutral.darken};

  &::placeholder {
    color: ${({ theme }: IThemes) => theme.colors.neutral.darken};
  }

  &:hover {
    background: ${({ theme }: IThemes) => theme.colors.neutral.darkly};
  }
`;
