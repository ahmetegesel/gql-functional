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
  allPass,
  filter,
} from 'ramda';

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
