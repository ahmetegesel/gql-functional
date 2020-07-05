import { andThen, pipe } from 'ramda';

import { mapResult } from '../lib/db/mongodb';
import { findAllInMainDb, findInMainDbBy, findInMainDbByObjectId } from '../lib/db/mongodb/main';

const collectionName = 'categories';

export const allCategories = pipe(() => findAllInMainDb(collectionName), andThen(mapResult));

export const categoryBy = pipe((filter) => findInMainDbBy(collectionName, filter), andThen(mapResult));

export const categoryById = pipe((id) => findInMainDbByObjectId(collectionName, id), andThen(mapResult));

