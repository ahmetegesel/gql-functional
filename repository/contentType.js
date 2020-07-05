import { andThen, pipe } from 'ramda';

import { mapResult } from '../lib/db/mongodb';
import { findAllInMainDb, findInMainDbBy, findInMainDbById } from '../lib/db/mongodb/main';

const collectionName = 'contentTypes';

export const allContentTypes = pipe(() => findAllInMainDb(collectionName), andThen(mapResult));

export const contentTypeBy = pipe((filter) => findInMainDbBy(collectionName, filter), andThen(mapResult));

export const contentTypeById = pipe((id) => findInMainDbById(collectionName, id), andThen(mapResult));
