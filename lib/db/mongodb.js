import {
  __,
  memoizeWith,
  identity,
  curry,
  pipe,
  andThen,
  map,
  prop,
  omit,
} from 'ramda';
import { MongoClient, ObjectId } from 'mongodb';

export const createClient = memoizeWith(identity, () => {
  return MongoClient.connect('mongodb://root:rootpassword@localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

export const useDatabase = (databaseName) =>
  pipe(
    () => createClient(),
    andThen((client) => client.db(databaseName))
  )();


export const useCollectionIn = curry((databaseName, collectionName) =>
  pipe(
    () => useDatabase(databaseName),
    andThen((db) => db.collection(collectionName))
  )()
);

export const useCollectionInPho = useCollectionIn('pho');

export const findBy = curry((collection, predicate) => collection.find(predicate).toArray());

export const findAll = findBy(__, {});

export const findById = curry((collection, id) => collection.findOne({ _id: id }))

export const findByObjectId = curry((collection, id) => findById(collection, new ObjectId(id)))

export const mapResult = map(item => ({ id: prop('_id', item), ...omit(['_id'], item) }))

/*
* // usage
* useCollectionIn('[dbName]', '[collectionName').then(async (collection) => {
  const result = await collection.findOne(new ObjectId(someId));

  console.log(result);
});
* */
