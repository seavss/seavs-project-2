const express = require('express');
const router = express.Router();
const drinkController = require('../controllers/drinkController');

/**
 * App Routes
 */
router.get('/', drinkController.homepage);

module.exports = router;