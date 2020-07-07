import { ApolloServer } from 'apollo-server';
import './config';

import { typeDefs, resolvers } from './src/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line
});
