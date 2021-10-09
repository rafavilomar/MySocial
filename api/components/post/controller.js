import * as store from '../../../store/mysql.js';

import { nanoid } from "nanoid";

const TABLE = 'post';

const Controller = {
  list: (injectedStore = store) => injectedStore.list(TABLE),
  get: (id, injectedStore = store) => injectedStore.get(TABLE, id),
  upsert: (data = {id: null, body: null, user: null, creationDate: null}, injectedStore = store) => {
    let post = {
      id: data.id || nanoid(),
      ...data
    };

    return injectedStore.upsert(TABLE, post);
  },
  like: (user, post, injectedStore = store) => injectedStore.upsert(`like_${TABLE}`, {id: nanoid(), user: user, post: post})
}
export default Controller;