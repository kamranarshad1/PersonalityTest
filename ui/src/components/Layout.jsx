import { useState } from 'react'
import Landing from './Landing'
import Feedback from './Feedback'
import Question from './Question/index'

export default function Layout() {
  const [getStarted, setGetStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [result, setResult] = useState(null)

  const handleGetStartedClick = () => {
    setGetStarted(true)
  }

  const handleFinishClick = () => {
    setFinished(true)
  }

  return (
    <div className='w-[1290px]'>
      {!getStarted && <Landing handleGetStartedClick={handleGetStartedClick} />}
      {getStarted && !finished && (
        <Question handleFinishClick={handleFinishClick} setResult={setResult} />
      )}
      {finished && <Feedback result={result} />}
    </div>
  )
}
