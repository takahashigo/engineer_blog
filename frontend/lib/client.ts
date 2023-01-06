import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(
  typeof process.env.NEXT_PUBLIC_GRAPHQL_API_URL === 'string'
    ? process.env.NEXT_PUBLIC_GRAPHQL_API_URL
    : ''
);

