import { ifElse } from 'ramda';

import { isNullOrEmpty } from '../../lib/utils';
import { allUsers, usersBy, userById, saveUser } from '../../repository/user';

export types from './types.graphql';

export const resolvers = {
  Query: {
    user(parent, { id }) {
      return userById(id);
    },
    users(parent, { filter }) {
      return ifElse(isNullOrEmpty, allUsers, usersBy)(filter);
    }
  },
  Mutation: {
    saveUser(parent, { input }) {
      return saveUser(input)
    }
  }
};
