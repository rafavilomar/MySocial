import mysql from 'mysql';
import config from '../config.js';

const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

let connection;

function handleCon() {
    connection = mysql.createConnection(dbconf);

    connection.connect((err) => {
        if (err) {
            console.error('[db err]', err);
            setTimeout(handleCon, 10000);
        } else {
            console.log('DB Connected!');
        }
    });

    connection.on('error', err => {
        console.error('[db err]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleCon();
        } else {
            throw err;
        }
    })
}

handleCon();

export const list = (table) => {
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

export const get = (table, id) => {
    return new Promise( (resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id = ?`, id, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

export const insert = (table, data) => {
    return new Promise( (resolve, reject) => {
        connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

export const update = (table, data) => {
    return new Promise( (resolve, reject) => {
        connection.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, data.id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    })
}

export const upsert = async (table, data) => {
    console.log(data);
    let response = await get(table, data.id);
    console.log(response);
    if (response.length > 0) {
        return update(table, data);
    } else {
        return insert(table, data);
    }
}

export const query = (table, query, join) => {

    let joinQuery = '';
    if (join) {
        const key = Object.keys(join)[0];
        const value = join[key];
        joinQuery = `JOIN ${key} ON ${table}.${value} = ${key}.id`;
    }

    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} ${joinQuery} WHERE ?`, query, (err, result) => {
            if (err) return reject(err)
            return resolve(result || null);
        })
    })
}
