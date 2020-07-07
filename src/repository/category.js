import { andThen, pipe } from 'ramda';

import { findAllInMainDb, findInMainDbBy, findInMainDbByObjectId } from '../../lib/db/main';
import { toModel } from '../../lib/db/mongodb/utils';

const collectionName = 'categories';

export const allCategories = pipe(() => findAllInMainDb(collectionName), andThen(toModel));

export const categoriesBy = pipe((filter) => findInMainDbBy(collectionName, filter), andThen(toModel));

export const categoryById = pipe((id) => findInMainDbByObjectId(collectionName, id), andThen(toModel));
