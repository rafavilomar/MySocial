import express from 'express';
import { error, success } from '../network/response';
import secure from '../api/components/auth/secure.js';

import * as store from '../store/mysql.js'

const router = express.Router();

router.get('/login', login);
router.get('/:table', secure('bd'), list);
router.get('/:table/:id', secure('bd'), get);
router.post('/:table', secure('bd'), upsert);
router.put('/:table', secure('bd'), upsert);

function login(req, res) {
  store.query(req.params.table, req.body)
    .then(token => success(req, res, token))
    .catch(err => error(req, res, err.message));
}

function list (req, res) {
  store.list(req.params.table)
    .then(list => success(req, res, list))
    .catch(err => error(req, res, err.message));
}

function get(req, res) {
  store.get(req.params.table, req.params.id)
    .then(element => success(req, res, element))
    .catch(err => error(req, res, err.message));
}

function upsert(req, res) {
  store.upsert(req.params.table, req.body)
    .then(element => success(req, res, element))
    .catch(err => error(req, res, err.message));
}