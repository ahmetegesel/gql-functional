export types from './types.graphql';

export const resolvers = {
  Query: {
    contentType(parent, args, context, info) {
      return 'Content Type';
    },
  },
};
