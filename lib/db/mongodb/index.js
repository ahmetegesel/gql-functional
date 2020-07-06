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
  curryN,
  last,
  init,
  ifElse,
  when,
  isNil,
  head,
} from 'ramda';
import { MongoClient, ObjectId } from 'mongodb';
import { isNullOrEmpty } from '../../utils';

export const docId = prop('_id');

export const modelId = prop('id');

export const isObjectId = ObjectId.isValid;

export const castDocId = when(isObjectId, id => new ObjectId(id));

export const withoutId = omit(['_id']);

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

export const toModel = mapResultWith(item => ({ id: docId(item), ...omit(['_id'], item) }));

export const removeUndefinedId = when(pipe(docId, isNil), omit(['_id']));

export const toDoc = mapResultWith(
  item => removeUndefinedId(
    {
      _id: castDocId(modelId(item)),
      ...omit(['id'], item)
    }
  )
);

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
