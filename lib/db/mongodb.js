import {
  memoizeWith,
  identity,
  curry,
  pipe,
  andThen
} from 'ramda';
import { MongoClient } from 'mongodb';

export const createClient = memoizeWith(identity, () => {

  return MongoClient.connect(process.env.MONGO_URI, {
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

/*
* // usage
* useCollectionIn('[dbName]', '[collectionName').then(async (collection) => {
  const result = await collection.findOne(new ObjectId(someId));

  console.log(result);
});
* */
