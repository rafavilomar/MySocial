import * as store from "../../../store/dummy.js";

const TABLE = 'user';

export const list = () => {
  return store.list(TABLE);
}