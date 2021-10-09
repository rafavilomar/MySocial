import * as store from '../../../store/mysql.js';

import authController from '../auth/controller.js';
import { nanoid } from 'nanoid';

const TABLE = 'user';

const Controller = {
    list : (injectedStore = store) => injectedStore.list(TABLE),
    get : (id, injectedStore = store) => injectedStore.get(TABLE, id),
    upsert : (data = {id: null, name: null, username: null, password: null }, injectedStore = store) => {
      let user = {
        id: data.id || nanoid()
      }
      data.username && (user.username = data.username)
      data.name && (user.name = data.name)
      
      authController.upsert({...user, password: data.password})
      return injectedStore.upsert(TABLE, user)
    },
    follow: (from, to, injectedStore = store) => injectedStore.upsert(`${TABLE}_follow`, {id: nanoid(), user_from: from, user_to: to}),
    myFollows: (id, injectedStore = store) => injectedStore.query(`${TABLE}_follow`, {user_from: id}),
    remove : (id, injectedStore = store) => injectedStore.remove(TABLE, id),
  }
  export default Controller;