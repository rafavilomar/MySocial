import express from 'express';
import {error, success} from '../../../network/response.js';
import Controller from './controller.js';

import secure from '../auth/secure.js';

const router = express.Router();

// Routes
router.get('/', list)
router.post('/follow/:id', secure('follow'), follow)
router.get('/myFollows', secure('myFollows'), myFollows)
router.get('/:id', get)
router.post('/', upsert)
router.delete('/:id', remove)
router.put('/', secure('update'), upsert);

// Functions
function list(req, res){
  Controller.list(req.headers)
    .then(list => success(req, res, list))
    .catch(err => error(req, res, err.message))
};

function get(req, res){
  Controller.get(req.params.id)
    .then(user => success(req, res, user))
    .catch(err => error(req, res, err.message))
};

function upsert(req, res){
  Controller.upsert(req.body)
    .then(user => success(req, res, user, 201))
    .catch(err => error(req, res, err.message))
};

function remove(req, res){
  Controller.remove(req.params.id)
    .then(user => success(req, res, user, 200))
    .catch(err => error(req, res, err.message))
};

function follow(req, res, next){
  Controller.follow(req.user.id, req.params.id)
  .then(user => success(req, res, user, 201))
  .catch(next)
}

function myFollows(req, res, next){
  Controller.myFollows(req.user.id)
  .then(user => success(req, res, user, 201))
  .catch(next)
}

export default router;