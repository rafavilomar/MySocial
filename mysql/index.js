import express from "express";
import bodyParser from "body-parser";

import config from '../config.js';

import router from './router.js'
const app = express();

app.use(bodyParser.json());

// ROUTES
app.use(router);

app.listen(config.mysql.port, () => {
  console.log(`MSQL listening on port ${config.mysql.port}`);
})