const express = require('express')
const router = express.Router()
const questionsRoutes = require('./questions.route')
const personalityRoutes = require('./personality.route')

router.use('/api/questions', questionsRoutes)
router.use('/api/personality', personalityRoutes)

module.exports = router
