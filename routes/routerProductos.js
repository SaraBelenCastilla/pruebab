const express = require('express');

const router = express.Router()
const ProductosController =require('../controllers/ProductosController')

router.get('/',ProductosController.getAllProductos)

module.exports= router;