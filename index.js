import { ApolloServer } from 'apollo-server';
import { config } from 'dotenv';

import { typeDefs, resolvers } from './schema';

// Environment Variables set-up
config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line
});
