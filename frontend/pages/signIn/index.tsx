import { ReactElement } from 'react';

import Input from '@/components/Input';
import Button from '@/components/Button';
import { Formik } from 'formik';
import { useQuery } from '@apollo/client';

import { SIGN_IN } from '@/services/Api/user/graphql';
import {
  AuthWrapper, Content, Title, FormWrapper, WrapperButton, FormElement,
} from './styles';

const SignIn = (): ReactElement => {
  const handleFormSubmit = ({ nickName, password }) => {
    const { data } = useQuery(SIGN_IN, {
      variables: { nickName, password },
    });

    console.log('data', data);
  };

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
