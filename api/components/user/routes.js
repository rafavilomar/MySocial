import express from 'express';
import {error, success} from '../../../network/response.js';
import Controller from './controller.js';


const router = express.Router();

// Routes
router.get('/', list)
router.get('/:id', get)
router.post('/', upsert)
router.delete('/:id', remove)

// Functions
function list(req, res){
  //console.log(res.status)
  Controller.list()
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

export default router;