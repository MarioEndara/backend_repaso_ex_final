const express = require('express');
const router = express.Router();
const { crearEstudiante, obtenerEstudiantes } = require('../controllers/estudiantesController');
const protegerRuta = require('../middleware/authMiddleware');

// Solo usuarios logueados pueden ver o crear estudiantes
router.get('/', protegerRuta, obtenerEstudiantes);
router.post('/', protegerRuta, crearEstudiante);

module.exports = router;