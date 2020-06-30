import { ApolloServer } from 'apollo-server';
import Query from './types.graphql';

const server = new ApolloServer({
  typeDefs: [Query],
  resolvers: {
    Query: {
      hello: () => 'Hello World!'
    }
  },
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line
});
