import { ReactElement } from 'react';

export interface IAuthData {
    email: string,
    nickName: string,
}

export interface IAuthProviderProps {
    children: ReactElement;
}
