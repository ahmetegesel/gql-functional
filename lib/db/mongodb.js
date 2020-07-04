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
  uncurryN,
  type,
  cond,
  equals,
  always,
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

export const findBy =
  uncurryN(2,
    pipe(
      useCollectionIn,
      curry(
        (collectionPromise, predicate) =>
          andThen(
            collection => collection.find(predicate).toArray(),
            collectionPromise
          )
      )
    )
  );

export const findAll = findBy(__, __, {});

export const findById =
  uncurryN(2,
    pipe(
      useCollectionIn,
      curry(
        (collectionPromise, id) =>
          andThen(
            collection => collection.findOne({ _id: id }),
            collectionPromise
          )
      )
    )
  );

export const findByObjectId =
  uncurryN(
    2,
    pipe(
      findById,
      uncurryN(2, fn => id => fn(new ObjectId(id)))
    )
  );

export const mapResultWith =
  curry(
    (transform, result) =>
      cond(
        [
          [equals('Array'), always(map(transform, result))],
          [equals('Object'), always(transform(result))],
        ]
      )(type(result))
  );

export const mapResult = mapResultWith(item => ({ id: prop('_id', item), ...omit(['_id'], item) }));
