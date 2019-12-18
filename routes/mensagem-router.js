'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/mensagem-controller');
const auth = require('../middlewares/authenctication');

let _ctrl = new controller();

router.get('/', auth, _ctrl.get);
router.get('/:id', auth, _ctrl.getById);
router.get('/empresa/:id/chat/:id', auth, _ctrl.getByChat);
router.get('/empresa/:id/chat/:id/mensagem/:id', auth, _ctrl.getById);
router.post('/', auth, _ctrl.post);
router.put('/:id', auth, _ctrl.put);
router.delete('/:id', auth, _ctrl.delete);

module.exports = router;