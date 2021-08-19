import express from 'express';
import response from '../../../network/response.js';
import * as Controller from './controller.js'

const router = express.Router();

router.get('/', (req, res)=> {
  const list = Controller.list()
  response.success(req, res, list)
});

export default router;