import { ReactElement } from 'react';

import Input from '@/components/Input';
import Button from '@/components/Button';
import { Formik } from 'formik';
import { useLazyQuery } from '@apollo/client';

import { SIGN_IN } from '@/services/Api/user/graphql';
import {
  AuthWrapper, Content, Title, FormWrapper, WrapperButton, FormElement,
} from './styles';

const SignIn = (): ReactElement => {
  const [auth, { loading, data, error }] = useLazyQuery(SIGN_IN);

  const handleFormSubmit = ({ nickName, password }) => {
    // auth(nickname, password);
    auth({ variables: { nickName, password } });
  };

  console.log('loading', loading, 'data', data, 'error', error);

  return (
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
