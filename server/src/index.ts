import express, { Express } from 'express'; 
import dotenv from 'dotenv';
import { createApolloServer } from './config/apolloServer';
import { ApolloServer } from 'apollo-server-express';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app: any = express(); 
const server: ApolloServer = createApolloServer();

server.start().then(() => {
  server.applyMiddleware({ app }); 
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`);
  });
});
