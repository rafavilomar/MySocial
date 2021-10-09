import bcrypt from 'bcrypt';
import {sign} from '../../../auth/index.js';
import * as store from '../../../store/mysql.js';

const TABLA = 'auth';

const authController = {
    login : async (username, password, injectedStore = store) => {
        const data = await injectedStore.query(TABLA, { username: username });
        
        if (data) {
            return bcrypt.compare(password, data[0].password)
            .then(sonIguales => {
                if (sonIguales === true) {
                    // Generar token;
                    return sign(data[0])
                } else {
                    throw new Error('Informacion invalida');
                }
            });    
        } else {
            throw new Error('Información invalida')
        }
        
    },
    upsert : async (data, injectedStore = store) => {
        
        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5);
        }

        return injectedStore.upsert(TABLA, authData);
    },
  }
  export default authController;