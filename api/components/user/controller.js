import * as store from '../../../store/mysql.js';

import authController from '../auth/controller.js';
import { nanoid } from 'nanoid';

const TABLE = 'user';

const Controller = {
    list : (injectedStore = store) => injectedStore.list(TABLE),
    get : (id, injectedStore = store) => injectedStore.get(TABLE, id),
    upsert : (data = {name: null, id: nanoid()}, injectedStore = store) => authController.upsert(TABLE, data),
    remove : (id, injectedStore = store) => injectedStore.remove(TABLE, id),
  }
  export default Controller;