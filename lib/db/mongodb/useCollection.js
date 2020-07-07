import { andThen, pipe, uncurryN } from 'ramda';
import { useDatabase } from './useDatabase';

export const useCollection =
  uncurryN(
    2,
    pipe(
      useDatabase,
      uncurryN(2, dbPromise => collectionName => andThen((db) => db.collection(collectionName), dbPromise))
    )
  );
