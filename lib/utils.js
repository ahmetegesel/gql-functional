import {
  __,
  reduce,
  mergeDeepRight,
  isNil,
  isEmpty,
  either,
  equals,
  type,
  ifElse,
  tap,
  pipe,
  toString,
  prop,
  useWith,
  when,
  identity,
  uncurryN,
  flip,
} from 'ramda';

export const mergeDeepRightAll = reduce(mergeDeepRight);

export const isNullOrEmpty = either(isNil, isEmpty);

export const isTypeOf = flip(uncurryN(2, pipe(type, equals)))

export const isError = isTypeOf('Error');

export const throwError = ifElse(
  isError,
  (err) => throw err,
  pipe(toString, (message) => throw new Error(message))
);

export const requireAuth = useWith(
  __,
  [
    identity,
    identity,
    tap(
      when(
        pipe(prop('user'), isNullOrEmpty),
        () => throwError('Not Authenticated')
      )
    )
  ]
);
