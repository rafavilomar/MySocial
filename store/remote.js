import axios from "axios";

const createRemoteDB = (host, port) => {
  const URL = `http://${host}:${port}`;

  function list(table, headers) {
    return req('GET', table, null, headers);
  }

  function get(table, id) {
    
  }

  function upsert(table, data) {
    
  }

  function query(table, query, join) {
    
  }

  //

  async function req(method, table, data, headers) {
    let url =  `${URL}/${table}`
    
    try {
      const response = await axios({
        method: method,
        url: url,
        data: data || '',
        headers: headers // TODO: add headers to all routes
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }

  return {list, upsert}
}
export default createRemoteDB;