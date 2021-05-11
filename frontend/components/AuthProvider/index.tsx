import {
  createContext, ReactElement, useEffect, useState,
} from 'react';

import useAuth from '@/shared/hooks/useAuth';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';
import { IAuthProviderProps, ERouter } from './interfaces';

const AuthContext = createContext(null);

const AuthProvider = ({ children }: IAuthProviderProps): ReactElement => {
  const [isLoadedData, setLoadedData] = useState<boolean>(false);
  const auth = useAuth();
  const router = useRouter();

  const { user, isLoadedUserData, getUser } = auth;
  const { nickName } = user ?? { nickName: null };
  const { pathname } = router;

  const isSigningRequiredRoute = Object.values(ERouter).some((route) => pathname === route);

  const checkOnSigning = () => {
    if (pathname !== ERouter.SIGN_IN && !nickName) {
      router.push(ERouter.SIGN_IN).then(() => {
        setLoadedData(true);
      });
    }

    if (nickName || pathname === ERouter.SIGN_IN) {
      setLoadedData(true);
    }
  };

  const checkSigningRequiredRoutes = () => {
    if (isSigningRequiredRoute) {
      getUser();
      if (isLoadedUserData) {
        checkOnSigning();
      }
    } else {
      setLoadedData(true);
    }
  };

  useEffect(() => {
    checkSigningRequiredRoutes();
  }, [isSigningRequiredRoute, pathname, isLoadedUserData]);

  return isLoadedData ? (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  ) : <Loading />;
};

export {
  AuthProvider,
  AuthContext,
};
