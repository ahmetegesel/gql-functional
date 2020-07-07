import { andThen, pipe, uncurryN } from 'ramda';
import { useCollection } from './useCollection';

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
