import { andThen, pipe } from 'ramda';

import { toModel } from '../lib/db/mongodb';
import { findAllInMainDb, findInMainDbBy, findInMainDbByObjectId } from '../lib/db/mongodb/main';

const collectionName = 'categories';

export const allCategories = pipe(() => findAllInMainDb(collectionName), andThen(toModel));

export const categoriesBy = pipe((filter) => findInMainDbBy(collectionName, filter), andThen(toModel));

export const categoryById = pipe((id) => findInMainDbByObjectId(collectionName, id), andThen(toModel));

// export const saveCategory =
