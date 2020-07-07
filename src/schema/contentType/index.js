import { ifElse } from 'ramda';

import { allContentTypes, contentTypeBy, contentTypeById } from '../../repository/contentType';
import { isNilOrEmpty } from '../../../lib/utils';

export types from './types.graphql';

export const resolvers = {
  Query: {
    contentType(parent, { id }, context, info) {
      return contentTypeById(id);
    },
    contentTypes(parent, { filter }, context, info) {
      return ifElse(isNilOrEmpty, allContentTypes, contentTypeBy)(filter)
    },
  },
};
