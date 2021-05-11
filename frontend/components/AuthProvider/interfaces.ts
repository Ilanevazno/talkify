/* eslint-disable no-unused-vars */
import { ReactElement } from 'react';

export interface IAuthData {
  email: string,
  nickName: string,
}

export interface IAuthProviderProps {
  children: ReactElement;
}

// eslint-disable-next-line no-shadow
export enum ERouter {
  SIGN_IN = '/signIn',
  REGISTER = '/register',
  PROFILE = '/profile',
  MESSAGES = '/messages',
}
