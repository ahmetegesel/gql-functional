import {
  reduce,
  mergeDeepRight,
  pipe,
  find,
  uncurryN,
  isNil,
  isEmpty,
  propEq,
  mapObjIndexed,
  values,
  allPass, filter, ifElse, nAry, __, curry
} from 'ramda';
import { allContentTypes, contentTypeBy } from '../repository/contentType';

export const mergeDeepRightAll = reduce(mergeDeepRight);

export const isNullOrEmpty = pipe(isNil, isEmpty);

export const findBy = filter;

export const findById = uncurryN(2, (id) => find(item => item.id === id));

export const findByObject = uncurryN(2, (filter) => findBy(
  allPass(
    values(
      mapObjIndexed(
        (value, key) => propEq(key, value),
        filter
      )
    )
  )
));

export const allOrFilter = curry(
  (filter, allFn, filterFn) => ifElse(
    isNullOrEmpty,
    nAry(0, allFn),
    filterFn
  )(filter)
);
