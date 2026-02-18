const express = require('express');
const router = express.Router();
const { obtenerMaterias, crearMateria } = require('../controllers/materiasController');

// Se usa '/' porque el prefijo de '/api/materias' y está en server.js
router.get('/', obtenerMaterias); 
router.post('/', crearMateria);

module.exports = router;