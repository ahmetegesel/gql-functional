import { either, isEmpty, isNil } from 'ramda';

export const isNilOrEmpty = either(isNil, isEmpty);
