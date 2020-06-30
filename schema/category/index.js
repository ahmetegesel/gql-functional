import { allCategories, categoryBy, categoryById } from '../../repository/category';
import { isNullOrEmpty } from '../../lib/utils';

export types from './types.graphql';

export const resolvers = {
  Query: {
    category(parent, { id }, context, info) {
      return categoryById(id);
    },
    categories(parent, { filter }, context, info) {
      return isNullOrEmpty(filter) ? allCategories() : categoryBy(filter);
    }
  },
};
