const questionsService = require('../services/questions.service')

const getAll = (_, res) => {
  return questionsService.getAll(res)
}

const getQuestionsWithoutType = (_, res) => {
  return questionsService.getQuestionsWithoutType(res)
}

const create = (req, res) => {
  return questionsService.create(res, req.body)
}

const deleteById = (req, res) => {
  return questionsService.deleteById(res, parseInt(req.params.id))
}

module.exports = {
  getAll,
  getQuestionsWithoutType,
  create,
  deleteById,
}
