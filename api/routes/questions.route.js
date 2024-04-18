const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questions.controller");

router.get('/', questionsController.getQuestionsWithoutType);
router.post('/', questionsController.create);
router.delete('/:id', questionsController.deleteById);

module.exports = router;
