import { render, fireEvent } from '@testing-library/react'
import QuestionCard from '../components/Question/QuestionCard'

describe('QuestionCard Component', () => {
  it('renders correctly and calls handleSelectOption on option select', () => {
    const handleSelectOption = vi.fn()
    const questions = [
      {
        title: 'Question 1',
        options: [
          { text: 'Option 1' },
          { text: 'Option 2' },
          { text: 'Option 3' },
          { text: 'Option 4' },
        ],
      },
    ]
    const selectedOptions = [null]
    const { getByText } = render(
      <QuestionCard
        questions={questions}
        currentQuestionIndex={0}
        selectedOptions={selectedOptions}
        handleSelectOption={handleSelectOption}
      />
    )

    // Simulate selecting an option
    fireEvent.click(getByText('Option 1'))

    // Check if handleSelectOption is called with the correct arguments
    expect(handleSelectOption).toHaveBeenCalledWith(0, 0)
  })
})
