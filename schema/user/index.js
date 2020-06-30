export types from './types.graphql';

export const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return 'User';
    },
  },
};
