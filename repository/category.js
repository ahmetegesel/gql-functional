import { categories } from '../lib/mockData';
import { findById, findByObject } from '../lib/utils';

export const allCategories = () => categories

export const categoryBy = (filter) => findByObject(filter, categories)

export const categoryById = (id) => findById(id, categories)
