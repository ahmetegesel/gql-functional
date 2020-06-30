export types from './types.graphql';

export const resolvers = {
  Query: {
    newsType(parent, args, context, info) {
      return 'News Type';
    },
  },
};
