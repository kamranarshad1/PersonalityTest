const Question = require('../models/Question')

const getAll = (res) => {
  const questions = Question.getAll()
  res.json(questions)
}

const getQuestionsWithoutType = (res) => {
  const questions = Question.getAll()

  res.json(
    questions.map((question) => {
      const optionsWithoutType = question.options.map((option) => {
        const { type, ...optionWithoutType } = option
        return optionWithoutType
      })

      return { ...question, options: optionsWithoutType }
    })
  )
}

const create = (res, body) => {
  const createdQuestion = Question.create(body)
  res.status(201).json({
    message: "Question created successfully",
    question: createdQuestion,
  })
}

const deleteById = (res, id) => {
  const isDeleted = Question.deleteById(id)

  if (isDeleted) {
    res.json({
      message: `Question with id ${id} deleted successfully`,
    })
  } else {
    res.status(404).json({ error: `Question with id ${id} not found` })
  }
}


module.exports = {
  getAll,
  create,
  getQuestionsWithoutType,
  deleteById,
}
