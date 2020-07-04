import { contentTypes } from '../lib/mockData';
import { findBy, findAll, mapResult, findById } from '../lib/db/mongodb';
import { andThen, pipe } from 'ramda';

export const allContentTypes = pipe(() => findAll('pho', 'contentTypes'), andThen(mapResult));

export const contentTypeBy = pipe((filter) => findBy('pho', 'contentTypes', filter), andThen(mapResult));

export const contentTypeById = pipe((id) => findById('pho', 'contentTypes', id), andThen(mapResult));
