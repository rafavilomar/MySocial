import express from 'express';
import response from '../../../network/response.js';
import Controller from './controller.js'

const router = express.Router();

// Routes
router.get('/', list)
router.get('/:id', get)
router.post('/', upsert)
router.delete('/:id', remove)

// Functions
function list(req, res){
  Controller.list()
    .then(list => response.success(req, res, list))
    .catch(error => response.error(req, req, error.message))
};

function get(req, res){
  Controller.get(req.params.id)
    .then(user => response.success(req, res, user))
    .catch(error => response.error(req, req, error.message))
};

function upsert(req, res){
  Controller.upsert(req.body)
    .then(user => response.success(req, res, user, 201))
    .catch(error => response.error(req, req, error.message))
};

function remove(req, res){
  Controller.remove(req.params.id)
    .then(user => response.success(req, res, user, 200))
    .catch(error => response.error(req, req, error.message))
};

export default router;