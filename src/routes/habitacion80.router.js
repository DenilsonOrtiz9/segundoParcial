//obtiene las funciones para el vector
const express = require('express');
const router = express.Router();
const Controller = require('../controllers/habitacion80.controller');

router.get('/create80', Controller.create);
router.get('/', Controller.index);
router.get('/:id', Controller.show);
router.post('/', Controller.store);


module.exports = router;
