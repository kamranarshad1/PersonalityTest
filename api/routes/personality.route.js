const express = require('express');
const router = express.Router();
const personalityController = require('../controllers/personality.controller');

router.post('/', personalityController.determinePersonalityType);

module.exports = router;
