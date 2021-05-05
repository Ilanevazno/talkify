import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  query SignIn($nickName: String!, $password: String!) {
    signIn(email: $nickName, password: $password)
  }`;

export const GET_ME = gql`
  query {
    getMe {
      nickName
    }
  }
`;
