const express = require('express');
const router = express.Router();
const { registrarUsuario, login } = require('../controllers/usuariosController');


//Ruta para crear usuario
router.post('/registro', registrarUsuario);
//Ruta para el login
router.post('/login', login);

module.exports = router;