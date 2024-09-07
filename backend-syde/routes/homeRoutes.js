const express = require('express');
const router = express.Router();
const { home } = require('../controllers/homeController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, home);

module.exports = router;
