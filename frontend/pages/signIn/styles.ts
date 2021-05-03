import { IThemes } from '@/shared/styles/interfaces';
import styled from 'styled-components';

export const Title = styled.h2`
  font-family: ${({ theme }: IThemes) => theme.typography.fontName};
  text-align: center;
  margin-bottom: 40px;
`;

export const AuthWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 1000px;
  min-height: 600px;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }: IThemes) => theme.colors.neutral.background};
  color: ${({ theme }: IThemes) => theme.colors.neutral.white};
  box-shadow: ${({ theme }: IThemes) => theme.shadows.main};
`;

export const WrapperButton = styled.div`
  margin-top: 20px;
`;
