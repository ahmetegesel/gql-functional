import { andThen, pipe } from 'ramda';
import { toModel } from 'mongofn';

import { findAllInMainDb, findInMainDbBy, findInMainDbByObjectId } from '../../lib/db/main';

const collectionName = 'categories';

export const allCategories = pipe(() => findAllInMainDb(collectionName), andThen(toModel));

export const categoriesBy = pipe((filter) => findInMainDbBy(collectionName, filter), andThen(toModel));

export const categoryById = pipe((id) => findInMainDbByObjectId(collectionName, id), andThen(toModel));
