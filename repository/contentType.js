import { contentTypes } from '../lib/mockData';
import { findById, findByObject } from '../lib/utils';

export const allContentTypes = () => contentTypes

export const contentTypeBy = (filter) => findByObject(filter, contentTypes)

export const contentTypeById = (id) => findById(id, contentTypes)
