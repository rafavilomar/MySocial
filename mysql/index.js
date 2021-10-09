import express from "express";
import bodyParser from "body-parser";

import config from '../config.js';

const app = express();

app.use(bodyParser.json());

// ROUTES
app.use('/', get);

app.listen(config.mysql.port, () => {
  console.log(`MSQL listening on port ${config.mysql.port}`);
})