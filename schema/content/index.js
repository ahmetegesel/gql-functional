export types from './types.graphql';

export const resolvers = {
  Query: {
    content(parent, args, context, info) {
      return 'Content';
    },
  },
};
