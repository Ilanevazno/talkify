import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  query {
    signIn(login: "ilya", password: "123") {
    nickName,
  },
  }
`;
