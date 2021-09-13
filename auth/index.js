import jwt from 'jsonwebtoken';
import config from '../config.js';
import error from '../utils/error.js'

const secret = config.jwt.secret;

export const sign = (data) => {
    return jwt.sign(data, secret);
}

function verify(token) {
    return jwt.verify(token, secret)
}

export const check = {
    own: function(req, owner) {
        const decoded = decodeHeader(req);
        console.log(decoded);

        if (decoded.id !== owner) {
            throw error('No puedes hacer esto', 401);
        }
    },
}

function getToken(auth) {
    if (!auth) {
        throw error('No viene token', 401);
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw error('Formato invalido', 401);
    }

    let token = auth.replace('Bearer ', '');
    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}