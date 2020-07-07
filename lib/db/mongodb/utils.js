import { always, cond, curry, equals, isNil, map, omit, pipe, prop, type, when } from 'ramda';
import { ObjectId } from 'mongodb';

export const docId = prop('_id');

export const modelId = prop('id');

export const isObjectId = ObjectId.isValid;

export const castDocId = when(isObjectId, id => new ObjectId(id));

export const withoutId = omit(['_id']);

export const mapResultWith =
  curry(
    (transform, result) =>
      cond(
        [
          [equals('Array'), always(map(transform, result))],
          [equals('Object'), always(transform(result))],
        ]
      )(type(result))
  );
export const toModel = mapResultWith(item => ({ id: docId(item), ...omit(['_id'], item) }));

export const removeUndefinedId = when(pipe(docId, isNil), omit(['_id']));

export const toDoc = mapResultWith(
  item => removeUndefinedId(
    {
      _id: castDocId(modelId(item)),
      ...omit(['id'], item)
    }
  )
);
