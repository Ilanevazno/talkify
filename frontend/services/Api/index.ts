import {
  ApolloClient, InMemoryCache, ApolloLink, HttpLink,
} from '@apollo/client';
import { onError } from 'apollo-link-error';

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => console.error(message));
  }
});

const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql',
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  credentials: 'include',
  cache: new InMemoryCache(),
  // link: ApolloLink.from([errorLink, httpLink]),
});

export default client;
