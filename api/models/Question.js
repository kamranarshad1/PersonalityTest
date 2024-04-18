const { PersonalityType } = require('../constants')

const getAll = () => questions

const create = (newQuestion) => {
  newQuestion.id = questions.length + 1
  questions.push(newQuestion)
  return newQuestion
}

const deleteById = (idToDelete) => {
  const indexToDelete = questions.findIndex(
    (question) => question.id === idToDelete
  )
  if (indexToDelete !== -1) {
    questions.splice(indexToDelete, 1)
    return true
  }
  return false
}

module.exports = { getAll, create, deleteById }

var questions = [
  {
    id: 1,
    title: "How do you feel in large social gatherings?",
    options: [
      {
        text: "I feel energized and enjoy interacting with many people.",
        type: PersonalityType.EXTROVERT,
      },
      {
        text: "I feel comfortable, but prefer smaller groups.",
        type: PersonalityType.EXTROVERT,
      },
      {
        text: "I feel overwhelmed and prefer to observe rather than participate.",
        type: PersonalityType.INTROVERT,
      },
      {
        text: "I feel anxious and uncomfortable, and try to avoid such situations.",
        type: PersonalityType.INTROVERT,
      },
    ],
  },
  {
    id: 2,
    title: "How often do you seek out new social experiences?",
    options: [
      {
        text: "Very often, I'm always looking for new things to do and people to meet.",
        type: PersonalityType.EXTROVERT,
      },
      {
        text: "Occasionally, when I'm in the mood for something different.",
        type: PersonalityType.EXTROVERT,
      },
      {
        text: "Rarely, I prefer familiar settings and routines.",
        type: PersonalityType.INTROVERT,
      },
      {
        text: "Never, I'm content with my current social circle and activities.",
        type: PersonalityType.INTROVERT,
      },
    ],
  },
  {
    id: 3,
    title: "How do you recharge after socializing?",
    options: [
      {
        text: "I recharge by spending more time with friends or engaging in social activities.",
        type: PersonalityType.EXTROVERT,
      },
      {
        text: "I need some alone time to relax and unwind.",
        type: PersonalityType.EXTROVERT,
      },
      {
        text: "I need a lot of alone time to process my thoughts and feelings.",
        type: PersonalityType.INTROVERT,
      },
      {
        text: "I feel drained and exhausted, and need a lot of alone time to recover.",
        type: PersonalityType.INTROVERT,
      },
    ],
  },
  {
    id: 4,
    title: "How do you handle unexpected changes or disruptions to your plans?",
    options: [
      {
        text: "I embrace spontaneity and enjoy adapting to new situations.",
        type: PersonalityType.EXTROVERT,
      },
      {
        text: "I'm flexible and can adjust to changes with ease.",
        type: PersonalityType.EXTROVERT,
      },
      {
        text: "I prefer stability and may feel uneasy with sudden changes.",
        type: PersonalityType.INTROVERT,
      },
      {
        text: "I find it challenging to cope with unexpected changes and may feel overwhelmed.",
        type: PersonalityType.INTROVERT,
      },
    ],
  },
  {
    id: 5,
    title: "How do you feel about public speaking or being the center of attention?",
    options: [
      {
        text: "I thrive on it and enjoy being in the spotlight.",
        type: PersonalityType.EXTROVERT,
      },
      {
        text: "I can handle it if necessary, but I prefer to blend into the background.",
        type: PersonalityType.EXTROVERT,
      },
      {
        text: "I feel nervous and uncomfortable, but I can manage with practice.",
        type: PersonalityType.INTROVERT,
      },
      {
        text: "I avoid it at all costs and feel extremely anxious in such situations.",
        type: PersonalityType.INTROVERT,
      },
    ],
  },
]
