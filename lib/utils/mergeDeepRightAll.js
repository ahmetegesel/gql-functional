import { mergeDeepRight, reduce } from 'ramda';

export const mergeDeepRightAll = reduce(mergeDeepRight);
