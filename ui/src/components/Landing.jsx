import { buttonStylings } from '../constants/constant'
import ArrowIcon from './Shared/ArrowIcon'

export default function Landing({ handleGetStartedClick }) {
  return (
    <section
      className='relative w-[1568px] flex flex-col items-end justify-start py-0 px-5 box-border gap-[118px]
    max-h-full max-w-full shrink-0 text-left text-xl text-white font-urbanist mq825:gap-[59px] mq450:gap-[29px]'
    >
      <div className='self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-91xl'>
        <div className='w-[1144px] flex flex-col justify-start gap-[46px] max-w-full z-[2] mq825:gap-[23px]'>
          <div className='self-stretch gap-[26px] max-w-full text-left'>
            <h1 className='m-0 self-stretch h-[245px]  text-inherit font-bold font-inherit inline-block mq825:text-20xl mq450:text-14xl'>
              Unlock Your Personality Potential Today!{' '}
            </h1>
            <div className='w-[806px] h-[72px] relative text-xl text-darkgray inline-block max-w-full mq450:text-base'>
              Are you curious about where you fall on the spectrum between
              introversion and extroversion? Our Personality Test is designed
              to help you gain valuable insights into your natural
              inclinations. Whether you find energy and fulfillment in
              solitude or thrive in social settings, our test will guide you
              in understanding your unique personality traits.
            </div>
          </div>
          <button
            onClick={handleGetStartedClick}
            className={`${buttonStylings} w-[234px]`}
          >
            <b className='relative uppercase'>Get Started</b>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
