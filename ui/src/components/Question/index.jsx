// src/components/Question.js
import React, { useState, useEffect } from 'react'

import QuestionCard from './QuestionCard'
import NavigationButtons from './NavigationButtons'

import { determinePersonalityType, fetchQuestions } from '../../utils/api'

export default function Question({ handleFinishClick, setResult }) {
  const [questions, setQuestions] = useState(null)
  const [selectedOptions, setSelectedOptions] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleSelectOption = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions]
    newSelectedOptions[questionIndex] = optionIndex
    setSelectedOptions(newSelectedOptions)
  }

  useEffect(() => {
    fetchQuestion()
  }, [])

  const fetchQuestion = async () => {
    try {
      const data = await fetchQuestions()
      if (data?.length) {
        setQuestions(data)
        setSelectedOptions(Array(data.length).fill(null))
      }
    } catch (error) {
      console.error('Error fetching question:', error)
    }
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1)
  }

  const handleFinishButton = async () => {
    if (currentQuestionIndex === questions.length - 1) {
      const result = await determinePersonalityType(selectedOptions)
      handleFinishClick()
      setResult(result.type)
    } else handleNextQuestion()
  }

  return (
    <div className='text-white relative text-left'>
      {questions && (
        <>
          <QuestionCard
            questions={questions}
            currentQuestionIndex={currentQuestionIndex}
            selectedOptions={selectedOptions}
            handleSelectOption={handleSelectOption}
          />
          <NavigationButtons
            handlePreviousQuestion={handlePreviousQuestion}
            previousButtonDisabled={currentQuestionIndex === 0}
            nextButtonDisabled={selectedOptions[currentQuestionIndex] == null}
            handleFinishButton={handleFinishButton}
            finishButtonCheck={currentQuestionIndex === questions.length - 1}
          />
        </>
      )}
    </div>
  )
}
