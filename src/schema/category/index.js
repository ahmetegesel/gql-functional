import { ifElse } from 'ramda';

import { allCategories, categoriesBy, categoryById } from '../../repository/category';
import { isNilOrEmpty } from '../../../lib/utils';

export types from './types.graphql';

export const resolvers = {
  Query: {
    category(parent, { id }, context, info) {
      return categoryById(id);
    },
    categories(parent, { filter }, context, info) {
      return ifElse(isNilOrEmpty, allCategories, categoriesBy)(filter);
    }
  },
};
