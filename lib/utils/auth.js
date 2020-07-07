import { __, identity, pipe, prop, tap, useWith, when } from 'ramda';
import { isNullOrEmpty, throwError } from '../utils';

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
