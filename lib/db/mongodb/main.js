import { tap } from 'ramda';
import { findAll, findBy, findById, findByObjectId, useCollection, useDatabase } from './';

const databaseName = 'pho';

export const useDatabaseInMainDb = tap(useDatabase, databaseName);

export const useCollectionInMainDb = useCollection(databaseName)

export const findInMainDbBy = findBy(databaseName);

export const findAllInMainDb = findAll(databaseName);

export const findInMainDbById = findById(databaseName);

export const findInMainDbByObjectId = findByObjectId(databaseName);
