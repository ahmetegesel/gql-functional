export types from './types.graphql';

export const resolvers = {
  Query: {
    category(parent, args, context, info) {
      return 'Category';
    },
  },
};
