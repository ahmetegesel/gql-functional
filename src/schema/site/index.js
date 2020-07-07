export types from './types.graphql';

export const resolvers = {
  Query: {
    site(parent, args, context, info) {
      return 'Site';
    },
  },
};
