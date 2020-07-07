import { identity, memoizeWith } from 'ramda';
import { MongoClient } from 'mongodb';

export const createClient = memoizeWith(identity, () => {
  return MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});
