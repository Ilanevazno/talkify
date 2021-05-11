import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  query SignIn($nickName: String!, $password: String!) {
    signIn(email: $nickName, password: $password) {
      status, payload {
        nickName, id
      }
    }
  }`;

export const GET_ME = gql`
  query {
    getMe {
      status, payload {
        nickName, id,
      }
    }
  }
`;
