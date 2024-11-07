import { ApolloServer } from 'apollo-server-express';
import { weatherSchema } from '../schemas/weatherSchema';
import { weatherResolver } from '../resolvers/weatherResolver';

export const createApolloServer = () => {
  return new ApolloServer({
    typeDefs: [weatherSchema],
    resolvers: [weatherResolver],
  });
};
