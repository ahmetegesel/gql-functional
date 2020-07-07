import { andThen, pipe } from 'ramda';

import { findAllInMainDb, findInMainDbBy, findInMainDbByObjectId, upsertInMainDb } from '../lib/db/mongodb/main';
import { toDoc, toModel } from '../lib/db/mongodb/utils';

const collectionName = 'users';

export const allUsers = pipe(() => findAllInMainDb(collectionName), andThen(toModel));

export const usersBy = pipe((filter) => findInMainDbBy(collectionName, filter), andThen(toModel));

export const userById = pipe((id) => findInMainDbByObjectId(collectionName, id), andThen(toModel));

export const saveUser = pipe((user) => upsertInMainDb(collectionName, toDoc(user)), andThen(toModel));
