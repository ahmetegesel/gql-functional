import {
  either,
  equals,
  flip,
  ifElse,
  isEmpty,
  isNil,
  mergeDeepRight,
  pipe,
  reduce,
  toString,
  type,
  uncurryN
} from 'ramda';

export * from './auth';

export const mergeDeepRightAll = reduce(mergeDeepRight);

export const isNullOrEmpty = either(isNil, isEmpty);

export const isTypeOf = flip(uncurryN(2, pipe(type, equals)))

export const isError = isTypeOf('Error');

export const throwError = ifElse(
  isError,
  (err) => throw err,
  pipe(toString, (message) => throw new Error(message))
);
