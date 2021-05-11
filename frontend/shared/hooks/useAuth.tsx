import { Statuses } from '@/pages/signIn/constants';
import { GET_ME, SIGN_IN } from '@/services/Api/user/graphql';
import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoadedUserData, setLoadedUserData] = useState<boolean>(false);

  const [auth] = useLazyQuery(SIGN_IN, {
    onCompleted: ({ signIn }) => {
      const { status, payload } = signIn;

      if (status === Statuses.SUCCESS_AUTH) {
        setUser(payload);
      }
    },
    onError: (error) => {
      console.log('error in auth', error);
    },
  });

  const [getMe] = useLazyQuery(GET_ME, {
    onCompleted: ({ getMe: getUser }) => {
      const { status, payload } = getUser ?? { status: null, payload: null };

      if (status === Statuses.SUCCESS_COOKIES_AUTH) {
        setUser(payload);
      }

      setLoadedUserData(true);
    },
    onError: (error) => {
      console.log('error in getting user', error);
    },
  });
  const login = (nickName: string, password: string) => auth({ variables: { nickName, password } });

  const logout = () => {
    console.log('signUp');
  };

  const getUser = () => getMe();

  return {
    login,
    logout,
    getUser,
    isLoadedUserData,
    user,
  };
};

export default useAuth;
