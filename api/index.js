import express from 'express';
import config from '../config.js';
import user from './components/user/routes.js';

const app = express();

// Router
app.use('/api/user', user)

app.listen(config.api.port, ()=> console.log(`Listening on ${config.api.port}`))