import { types as Category, resolvers as categoryResolvers } from './category';
import { types as ContentType, resolvers as contentTypeResolvers } from './contentType';
import { types as NewsType, resolvers as newsTypeResolvers } from './newsType';
import { types as Program, resolvers as programResolvers } from './program';
import { types as Site, resolvers as siteResolvers } from './site';
import { types as Source, resolvers as sourceResolvers } from './source';
import { types as User, resolvers as userResolvers } from './user';
import { types as Content, resolvers as contentResolvers } from './content';

import Query from './types.graphql';
import { mergeDeepRightAll } from '../../lib/utils';

const queryResolver = {
  Query: {
    hello: () => 'hello'
  },
  Mutation: {
    hello: () => 'hello'
  }
};

export const resolvers = mergeDeepRightAll(
  queryResolver,
  [
    categoryResolvers,
    contentTypeResolvers,
    newsTypeResolvers,
    programResolvers,
    siteResolvers,
    sourceResolvers,
    userResolvers,
    contentResolvers
  ]
);

export const typeDefs = [Query, Category, ContentType, NewsType, Program, Site, Source, User, Content];
