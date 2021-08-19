import express from 'express';
import response from '../../../network/response.js';
import Controller from './controller.js'

const router = express.Router();

router.get('/', (req, res)=> {
  Controller.list()
    .then(list => response.success(req, res, list))
    .catch(error => response.error(req, req, error.message))
});

router.get('/:id', (req, res)=> {
  Controller.get(req.params.id)
    .then(user => response.success(req, res, user))
    .catch(error => response.error(req, req, error.message))
});

export default router;