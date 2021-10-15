import express from 'express';
import bodyParser from 'body-parser';

import config from '../config.js';
import user from './components/user/routes.js';
import auth from './components/auth/network.js';
import post from './components/post/router.js';

import errors from '../network/errors.js';

const app = express();

app.use(bodyParser.json());

// ROUTER
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/post', post);

// comment from vim
app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});
