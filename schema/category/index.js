import { ifElse } from 'ramda';

import { isNullOrEmpty } from '../../lib/utils';
import { allCategories, categoriesBy, categoryById } from '../../repository/category';

export types from './types.graphql';

export const resolvers = {
  Query: {
    category(parent, { id }, context, info) {
      return categoryById(id);
    },
    categories(parent, { filter }, context, info) {
      return ifElse(isNullOrEmpty, allCategories, categoriesBy)(filter);
    }
  },
};
