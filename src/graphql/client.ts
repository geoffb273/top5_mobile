import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_ENDPOINT } from '../constants/configConstants';
import { proxy } from 'valtio';

type GraphQLHeaders = { 'auth-token'?: string };

export const graphqlHeaders = proxy<GraphQLHeaders>({
  'auth-token': undefined,
});

export const graphqlClient = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  headers: graphqlHeaders,
});
