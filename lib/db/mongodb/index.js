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
  tap, nAry, curryN, last, init,
} from 'ramda';
import { MongoClient, ObjectId } from 'mongodb';

export const createClient = memoizeWith(identity, () => {
  return MongoClient.connect('mongodb://root:rootpassword@localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

export const useDatabase = curry(databaseName => createClient().then(client => client.db(databaseName)))

export const useCollection =
  uncurryN(
    2,
    pipe(
      useDatabase,
      uncurryN(2, dbPromise => collectionName => andThen((db) => db.collection(collectionName), dbPromise))
    )
  );

export const findBy =
  uncurryN(
    3,
    pipe(
      useCollection,
      uncurryN(
        2,
        (collectionPromise) => predicate => andThen(collection => collection.find(predicate).toArray(), collectionPromise)
      )
    )
  );

export const findAll = findBy(__, __, {});

export const findById =
  uncurryN(
    3,
    pipe(
      useCollection,
      uncurryN(
        2,
        collectionPromise => id => andThen(collection => collection.findOne({ _id: id }), collectionPromise)
      )
    )
  );

export const findByObjectId =
  curryN(
    findById.length,
    (...args) => {
      const id = last(args);
      return findById(...init(args))(new ObjectId(id));
    }
  )

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
