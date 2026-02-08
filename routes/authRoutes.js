const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

// Endpoint: POST http://localhost:5000/api/login
router.post('/login', login);

module.exports = router;