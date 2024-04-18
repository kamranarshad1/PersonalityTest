const Question = require('../models/Question');
const { PersonalityType } = require('../constants');

const determinePersonalityType = (res, selectedOptions) => {
  let extrovertCount = 0;
  let introvertCount = 0;
  const questions = Question.getAll();

  const selectedOptionTypes = questions.map((question, index) => {
    return question.options[selectedOptions[index]]?.type;
  });

  for (const option of selectedOptionTypes) {
    if (option === PersonalityType.EXTROVERT) {
      extrovertCount++;
    } else if (option === PersonalityType.INTROVERT) {
      introvertCount++;
    }
  }

  let type = "";
  if (extrovertCount > introvertCount) {
    type = PersonalityType.EXTROVERT;
  } else if (introvertCount > extrovertCount) {
    type = PersonalityType.INTROVERT;
  } else {
    type = PersonalityType.AMBIVERT;
  }

  return res.json({ status: 200, type: type });
};

module.exports = {
  determinePersonalityType,
};
