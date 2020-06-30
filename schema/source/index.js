export types from './types.graphql';

export const resolvers = {
  Query: {
    source(parent, args, context, info) {
      return 'Source';
    },
  },
};
