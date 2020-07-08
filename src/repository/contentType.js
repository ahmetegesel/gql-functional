import { andThen, pipe } from 'ramda';
import { toModel } from 'mongofn';

import { findAllInMainDb, findInMainDbBy, findInMainDbById } from '../../lib/db/main';

const collectionName = 'contentTypes';

export const allContentTypes = pipe(() => findAllInMainDb(collectionName), andThen(toModel));

export const contentTypeBy = pipe((filter) => findInMainDbBy(collectionName, filter), andThen(toModel));

export const contentTypeById = pipe((id) => findInMainDbById(collectionName, id), andThen(toModel));
