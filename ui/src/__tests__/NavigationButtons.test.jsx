import { render, fireEvent } from '@testing-library/react'
import NavigationButtons from '../components/Question/NavigationButtons'

describe('NavigationButtons Component', () => {
  it('renders correctly and calls appropriate functions on button click', () => {
    const handlePreviousQuestion = vi.fn()
    const handleFinishButton = vi.fn()
    const { getByTestId } = render(
      <NavigationButtons
        handlePreviousQuestion={handlePreviousQuestion}
        previousButtonDisabled={false}
        nextButtonDisabled={false}
        handleFinishButton={handleFinishButton}
        finishButtonCheck={false}
      />
    )

    fireEvent.click(getByTestId('previous-button'))

    expect(handlePreviousQuestion).toHaveBeenCalled()

    fireEvent.click(getByTestId('next-button'))

    expect(handleFinishButton).toHaveBeenCalled()
  })
})
