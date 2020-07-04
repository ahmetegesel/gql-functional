import {
  reduce,
  mergeDeepRight,
  isNil,
  isEmpty,
  either,
} from 'ramda';

export const mergeDeepRightAll = reduce(mergeDeepRight);

export const isNullOrEmpty = either(isNil, isEmpty);
