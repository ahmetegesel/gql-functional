import { andThen, pipe } from 'ramda';

import { categories } from '../lib/mockData';
import { findAll, findBy, mapResult, findByObjectId } from '../lib/db/mongodb';

export const allCategories = pipe(() => findAll('pho', 'categories'), andThen(mapResult));

export const categoryBy = pipe((filter) => findBy('pho', 'categories', filter), andThen(mapResult));

export const categoryById = pipe((id) => findByObjectId('pho', 'categories', id), andThen(mapResult));
