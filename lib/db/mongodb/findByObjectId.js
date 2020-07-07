import { curryN, init, last } from 'ramda';
import { findById } from './findById';
import { ObjectId } from 'mongodb';

export const findByObjectId =
  curryN(
    findById.length,
    (...args) => {
      const id = last(args);
      return findById(...init(args))(new ObjectId(id));
    }
  );
