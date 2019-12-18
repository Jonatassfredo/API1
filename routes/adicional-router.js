'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/adicional-controller');
const auth = require('../middlewares/authenctication');

let _ctrl = new controller();

router.get('/', auth, _ctrl.get);
router.get('/:id', auth, _ctrl.getById);
router.get('/empresa/:id/', auth, _ctrl.getByEmpresa);
router.get('/empresa/:id/adicional/:id', auth, _ctrl.getById);
router.get('/empresa/:id/produto/:id', auth, _ctrl.getByProduto);
router.post('/', auth, _ctrl.post);
router.put('/:id', auth, _ctrl.put);
router.delete('/:id', auth, _ctrl.delete);

module.exports = router;