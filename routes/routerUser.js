const express = require('express');

const router = express.Router()

const UserController =require('../controllers/UserController')


router.post('/',UserController.getUser)
router.post('/login',UserController.getCreateUsuario)




module.exports= router;