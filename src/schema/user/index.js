import { ifElse } from 'ramda';

import { allUsers, usersBy, userById, saveUser } from '../../repository/user';
import { isNilOrEmpty } from '../../../lib/utils';

export types from './types.graphql';

export const resolvers = {
  Query: {
    user(parent, { id }) {
      return userById(id);
    },
    users(parent, { filter }) {
      return ifElse(isNilOrEmpty, allUsers, usersBy)(filter);
    }
  },
  Mutation: {
    saveUser(parent, { input }) {
      return saveUser(input)
    }
  }
};
