import { andThen, pipe, uncurryN } from 'ramda';
import { useCollection } from './useCollection';

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
