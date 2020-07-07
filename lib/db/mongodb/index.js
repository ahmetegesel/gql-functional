import {
  __,
  andThen,
  curry,
  curryN,
  head,
  identity,
  ifElse,
  init,
  last,
  memoizeWith,
  pipe,
  prop,
  uncurryN,
} from 'ramda';
import { MongoClient, ObjectId } from 'mongodb';
import { isNullOrEmpty } from '../../utils';
import { docId, withoutId } from './utils';

export * from './utils.js';

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
  );

export const handleInsertOneResult = pipe(prop('ops'), head);

export const handleFindOneAndUpdateResult = prop('value');

export const upsert =
  uncurryN(
    3,
    pipe(
      useCollection,
      uncurryN(
        2,
        collectionPromise => doc => andThen(
          ifElse(
            () => isNullOrEmpty(docId(doc)),
            // insert when id is nil
            collection => andThen(handleInsertOneResult, collection.insertOne(doc)),
            // else update the document by finding it with its id
            collection => andThen(
              handleFindOneAndUpdateResult,
              collection.findOneAndUpdate(
                { _id: docId(doc) },
                { $set: withoutId(doc) },
                { upsert: true, returnOriginal: false },
              )
            )
          ),
          collectionPromise,
        )
      )
    )
  );
