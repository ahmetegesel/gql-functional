import { allCategories, categoryBy, categoryById } from '../../repository/category';
import { isNullOrEmpty } from '../../lib/utils';
import { ifElse, nAry } from 'ramda';
import { allContentTypes, contentTypeBy } from '../../repository/contentType';

export types from './types.graphql';

export const resolvers = {
  Query: {
    category(parent, { id }, context, info) {
      return categoryById(id);
    },
    categories(parent, { filter }, context, info) {
      return ifElse(isNullOrEmpty, allCategories, categoryBy)(filter);
    }
  },
};
