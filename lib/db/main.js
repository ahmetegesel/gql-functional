import { tap } from 'ramda';
import {
  useDatabase,
  useCollection,
  findBy,
  findAll,
  findById,
  findByObjectId,
  upsert
} from './mongodb';

const databaseName = process.env.MAIN_DB;

export const useDatabaseInMainDb = tap(useDatabase, databaseName);

export const useCollectionInMainDb = useCollection(databaseName);

export const findInMainDbBy = findBy(databaseName);

export const findAllInMainDb = findAll(databaseName);

export const findInMainDbById = findById(databaseName);

export const findInMainDbByObjectId = findByObjectId(databaseName);

export const upsertInMainDb = upsert(databaseName);
