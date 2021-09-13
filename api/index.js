import express from 'express';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';

import config from '../config.js';
import user from './components/user/routes.js';
import auth from './components/auth/network.js';
import errors from '../network/errors.js';
import swaggerDoc from './swagger.js'


const app = express();

app.use(bodyParser.json());

// ROUER
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});