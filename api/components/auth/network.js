import express from 'express';
import {success} from '../../../network/response.js';
import Controller from './index.js';

const router = express.Router();

router.post('/login', function(req, res, next) {
    Controller.login(req.body.username, req.body.password)
        .then(token => {
            success(req, res, token, 200);
        })
        .catch(next);
})

export default router;