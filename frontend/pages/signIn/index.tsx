import { ReactElement, useState } from 'react';

import Input from '@/components/Input';
import Button from '@/components/Button';
import { Formik } from 'formik';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { SIGN_IN, GET_ME } from '@/services/Api/user/graphql';
import {
  AuthWrapper, Content, Title, FormWrapper, WrapperButton, FormElement,
} from './styles';

import { Statuses } from './constants';

const SignIn = (): ReactElement => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const router = useRouter();

  useQuery(GET_ME, {
    onCompleted: ({ getMe: { nickName } }) => {
      setCurrentUser(nickName);

      if (nickName) router.push('/profile');
    },
  });
  const [auth] = useLazyQuery(SIGN_IN, {
    onCompleted: ({ signIn }) => {
      if (signIn === Statuses.SUCCESS_AUTH) router.push('/profile');
    },
  });

  const handleFormSubmit = ({ nickName, password }) => {
    auth({ variables: { nickName, password } });
  };

  return currentUser ? null : (
    <AuthWrapper>
      <Content>
        <Title>Войдите в аккаунт</Title>
        <Formik initialValues={{ nickName: '', password: '' }} onSubmit={handleFormSubmit}>
          {({ isSubmitting, handleChange, handleSubmit }) => (
            <FormWrapper onSubmit={handleSubmit}>
              <FormElement>
                <Input onChange={handleChange} placeholder="Логин" name="nickName" />
              </FormElement>
              <FormElement>
                <Input onChange={handleChange} placeholder="Пароль" type="password" name="password" />
              </FormElement>
              <WrapperButton>
                <Button type="submit" disabled={isSubmitting}>
                  Вход
                </Button>
              </WrapperButton>
            </FormWrapper>
          )}
        </Formik>
      </Content>
    </AuthWrapper>
  );
};

export default SignIn;
