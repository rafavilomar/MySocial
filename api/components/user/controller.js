import { nanoid } from "nanoid";
import * as store from "../../../store/dummy.js";


const TABLE = 'user';

const Controller = {
  list : (injectedStore = store) => injectedStore.list(TABLE),
  get : (id, injectedStore = store) => injectedStore.get(TABLE, id),
  upsert : (data = {name: null, id: nanoid()}, injectedStore = store) => injectedStore.upsert(TABLE, data),
  remove : (id, injectedStore = store) => injectedStore.remove(TABLE, id),
}
export default Controller;