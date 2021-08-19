const db = {
  'user': [
    {id: 1, name: 'Jhon'}
  ]
};

export const list = (table) => {
  return db[table]
}

export const get = (table, id) => {
  col = list(table);
  return col.filter(item => item.id === id)[0] || null
}

export const upsert = (table, data) => {
  db[table].push(data)
}

export const remove = (table, id) => {
  return true;
}