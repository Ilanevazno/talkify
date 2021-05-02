import { ReactElement, useEffect } from 'react';

import user from './state';

import { useRouter } from 'next/router';

const AuthProvider = ({ children }): ReactElement => {
    const router = useRouter();
    const { nickName } = user.authStatus;

    useEffect(() => {
        router.push('/signIn');
    }, []);

    return nickName ? <div>{children}</div> : null;
};

export default AuthProvider;