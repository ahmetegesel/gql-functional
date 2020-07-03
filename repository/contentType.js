import { contentTypes } from '../lib/mockData';
import { findById, findBy, findAll, useCollectionInPho, mapResult } from '../lib/db/mongodb';
import { __, andThen, pipe } from 'ramda';

export const useContentTypes = () => useCollectionInPho('contentTypes')

export const allContentTypes = () => pipe(useContentTypes, andThen(findAll), andThen(mapResult))();

export const contentTypeBy = (filter) => pipe(useContentTypes, andThen(findBy(__, filter)), andThen(mapResult))();

export const contentTypeById = (id) => pipe(useContentTypes, andThen(findById(__, id)), andThen(mapResult))();
