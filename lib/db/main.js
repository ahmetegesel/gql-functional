import {
  useDb,
  useCollection,
  findBy,
  findAll,
  findById,
  findByObjectId,
  upsert,
} from 'mongofn';

const databaseName = process.env.MAIN_DB;

const connectionString = process.env.MONGO_URI

export const useDbInMainDb = () => useDb(connectionString, databaseName);

export const useCollectionInMainDb = useCollection(connectionString, databaseName);

export const findInMainDbBy = findBy(connectionString, databaseName);

export const findAllInMainDb = findAll(connectionString, databaseName);

export const findInMainDbById = findById(connectionString, databaseName);

export const findInMainDbByObjectId = findByObjectId(connectionString, databaseName);

export const upsertInMainDb = upsert(connectionString, databaseName);
