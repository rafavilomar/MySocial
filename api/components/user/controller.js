import * as store from "../../../store/dummy.js";

const TABLE = 'user';

const Controller = {
  list : (injectedStore = store) => injectedStore.list(TABLE),
  get : (id, injectedStore = store) => injectedStore.get(TABLE, id)
}
export default Controller;