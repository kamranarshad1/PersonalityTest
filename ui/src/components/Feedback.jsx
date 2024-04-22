import { findValueByKey } from '../utils/index'

export default function Feedback({ result }) {
  const resultType = findValueByKey(result)

  return (
    <div className='flex flex-col'>
      <h3 className='font-bold text-9xl inline-block mq825:text-20xl mq450:text-14xl text-white'>
        You are an <span className='text-21xl'>{result}!</span>
      </h3>

      <h3 className='font-bold text-6xl inline-block mq825:text-20xl mq450:text-14xl text-white'>
        ' {resultType.tagline} '
      </h3>
      <h3 className='font-bold text-6xl inline-block mq825:text-20xl mq450:text-14xl text-white'>
        {resultType.description}
      </h3>
    </div>
  )
}
