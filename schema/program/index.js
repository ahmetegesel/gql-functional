export types from './types.graphql';

export const resolvers = {
  Query: {
    program(parent, args, context, info) {
      return 'Program';
    },
  },
};
