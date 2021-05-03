import { ReactElement, useEffect } from 'react';

import { useRouter } from 'next/router';
import { IAuthProviderProps } from './interfaces';
import user from './state';

const AuthProvider = ({ children }: IAuthProviderProps): ReactElement => {
  const router = useRouter();
  const { nickName } = user.authStatus;

  useEffect(() => {
    router.push('/signIn');
  }, []);

  return nickName ? <div>{children}</div> : null;
};

export default AuthProvider;
