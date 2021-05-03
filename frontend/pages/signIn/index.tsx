import { ReactElement } from 'react';

import Input from '@/components/Input';
import Button from '@/components/Button';
import {
  AuthWrapper, Content, Title, FormWrapper, WrapperButton,
} from './styles';

const SignIn = (): ReactElement => (
  <AuthWrapper>
    <Content>
      <Title>Войдите в аккаунт</Title>
      <FormWrapper>
        <Input placeholder="Логин" />
        <Input placeholder="Пароль" />
        <WrapperButton>
          <Button>
            Вход
          </Button>
        </WrapperButton>
      </FormWrapper>
    </Content>
  </AuthWrapper>
);

export default SignIn;
