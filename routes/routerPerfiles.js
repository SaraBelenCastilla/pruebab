const express = require('express');

const router = express.Router()


const PerfilesController = require('../controllers/PerfilesController')


router.get('/',PerfilesController.getAllPerfiles)
  


  router.get('/:id',PerfilesController.getPerfil)

  router.put('/',PerfilesController.getUpdatePerfiles)
  router.delete('/',PerfilesController.getDeletePerfiles)

  module.exports= router;
 