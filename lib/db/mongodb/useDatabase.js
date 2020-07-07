import { curry } from 'ramda';
import { createClient } from './createClient';

export const useDatabase = curry(databaseName => createClient().then(client => client.db(databaseName)))
