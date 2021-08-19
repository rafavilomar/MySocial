const db = {
  'user': [
    {id: 1, name: 'Jhon'}
  ]
};

export const list = (table) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(db[table])  
    } catch (error) {
      reject(error)
    }
  })
}

export const get = (table, id) => {
  return new Promise( async (resolve, reject) => {
    try {
      let col = await list(table);
      let res = col.filter(item => item.id == id)[0] || null;
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}

export const upsert = (table, data) => {
  return new Promise((resolve, reject) => {
    try {
      db[table].push(data)
      resolve(true)
    } catch (error) {
      reject('error')
    }
  })
}

export const remove = (table, id) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}