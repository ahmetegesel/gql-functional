import { andThen, pipe } from 'ramda';

import { findAllInMainDb, findInMainDbBy, findInMainDbById } from '../lib/db/mongodb/main';
import { toModel } from '../lib/db/mongodb/utils';

const collectionName = 'contentTypes';

export const allContentTypes = pipe(() => findAllInMainDb(collectionName), andThen(toModel));

export const contentTypeBy = pipe((filter) => findInMainDbBy(collectionName, filter), andThen(toModel));

export const contentTypeById = pipe((id) => findInMainDbById(collectionName, id), andThen(toModel));
