import express from "express";
import { error, success } from "../../../network/response.js";
import Controller from "./controller.js";
import secure from '../auth/secure.js'

const router = express.Router();

router.get('/', secure('post'), list);
router.get('/:id', secure('post'), get);
router.post('/', secure('post'), upsert);
router.put('/', secure('post'), upsert);
router.post('/like/:post', secure('post'), like);

function list(req, res) {
  Controller.list()
    .then(list => success(req, res, list))
    .catch(err => error(req, res, err.message));
}

function get(req, res) {
  Controller.get(req.params.id)
    .then(post => success(req, res, post))
    .catch(err => error(req, res, err.message));
}

function upsert(req, res) {
  Controller.upsert({creationDate: new Date(), user: req.user.id, ...req.body})
    .then(post => success(req, res, post))
    .catch(err => error(req, res, err.message));
}

function like(req, res) {
  Controller.like(req.user.id, req.params.post)
    .then(like => success(req, res, like))
    .catch(err => error(req, res, err.message));
}

export default router;