import {
  ReactElement, useContext,
} from 'react';

import Input from '@/components/Input';
import Button from '@/components/Button';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { AuthContext } from '@/components/AuthProvider';
import {
  AuthWrapper, Content, Title, FormWrapper, WrapperButton, FormElement,
} from './styles';

const SignIn = (): ReactElement => {
  const { login, user } = useContext(AuthContext);
  const { nickName: userNick } = user ?? { nickName: null };
  const router = useRouter();

  const handleFormSubmit = ({ nickName, password }) => {
    login(nickName, password);
  };

  if (userNick) router.push('/profile');

  return userNick ? null : (
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
