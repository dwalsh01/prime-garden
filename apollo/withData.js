import withApollo from 'next-with-apollo';
import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ENDPOINT } from './config';

const link = createHttpLink({
  fetch,
  uri: ENDPOINT,
});

export default withApollo(
  ({ initialState, headers }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache().restore(initialState || {}),
      request: (operation) => {
        operation.setContext({
          fetchOptions: {
            credentials: 'include',
          },
          headers,
        });
      },
    })
);
