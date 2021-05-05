import { ReactElement } from 'react';

import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_ME } from '@/services/Api/user/graphql';
import { IAuthProviderProps } from './interfaces';
import user from './state';

const AuthProvider = ({ children }: IAuthProviderProps): ReactElement => {
  const router = useRouter();
  const { loading, data } = useQuery(GET_ME, {
    onCompleted: ({ getMe }) => {
      if (!getMe?.nickName) router.push('/signIn');
      else user.setAuthData(getMe);
    },
  });
  const nickName = data?.getMe?.nickName;

  const isAuthDone = !loading && nickName;

  return isAuthDone ? <div>{children}</div> : null;
};

export default AuthProvider;
