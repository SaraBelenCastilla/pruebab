const express = require('express');

const router = express.Router()

const ConsultasController =require('../controllers/ConsultasController')

router.get('/',ConsultasController.getAllConsultas)
router.get('/:id',ConsultasController.getConsulta)
router.put('/',ConsultasController.getUpdateConsultas)
router.delete('/',ConsultasController.getDeleteConsultas)
router.post('/',ConsultasController.getCreateConsultas)


  module.exports= router;