import Option from '../Shared/Option'

export default function QuestionCard({
  questions,
  currentQuestionIndex,
  selectedOptions,
  handleSelectOption,
}) {
  return (
    <>
      <h3 className='text-lg m-0'>
        Question no: {currentQuestionIndex + 1} of {questions.length}
      </h3>
      <h3 className='font-bold font-inherit text-9xl inline-block mq825:text-20xl mq450:text-14xl'>
        {questions[currentQuestionIndex].title}{' '}
      </h3>
      {questions[currentQuestionIndex].options.map((option, optionIndex) => (
        <Option
          key={optionIndex}
          value={option.text}
          label={option.text}
          isSelected={
            selectedOptions[currentQuestionIndex] === optionIndex
          }
          onSelect={() => handleSelectOption(currentQuestionIndex, optionIndex)}
          optionLabel={String.fromCharCode(65 + optionIndex)}
        />
      ))}
    </>
  )
}
