import { __, identity, pipe, prop, tap, useWith, when } from 'ramda';
import { isNilOrEmpty } from './isNilOrEmpty';
import throwError from './throwError';

export const requireAuth = useWith(
  __,
  [
    identity,
    identity,
    tap(
      when(
        pipe(prop('user'), isNilOrEmpty),
        () => throwError('Not Authenticated')
      )
    )
  ]
);
