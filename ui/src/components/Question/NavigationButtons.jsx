import ArrowIcon from '../Shared/ArrowIcon'
import { buttonStylings } from '../../constants/constant'

export default function NavigationButtons({
  handlePreviousQuestion,
  previousButtonDisabled,
  nextButtonDisabled,
  handleFinishButton,
  finishButtonCheck,
}) {
  return (
    <div className='flex justify-between mt-[10px]'>
      <button
        onClick={handlePreviousQuestion}
        className={`transform rotate-180 ${buttonStylings} ${
          previousButtonDisabled ? 'opacity-50' : 'opacity-100'
        }`}
        data-testid={'previous-button'}
        disabled={previousButtonDisabled}
      >
        <ArrowIcon />
      </button>

      <button
        onClick={handleFinishButton}
        className={`${buttonStylings} ${
          nextButtonDisabled ? 'opacity-50' : 'opacity-100'
        }`}
        data-testid={'next-button'}
        disabled={nextButtonDisabled}
      >
        {finishButtonCheck ? 'Submit' : <ArrowIcon />}
      </button>
    </div>
  )
}
