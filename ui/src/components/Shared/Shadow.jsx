export default function Shadow() {
  return (
    <section className='absolute flex flex-col items-center'>
      <div className='w-[806px] h-[806px] flex flex-col items-center justify-start max-w-full'>
        <div className='self-stretch h-[806px] rounded-[50%] bg-steelblue [filter:blur(500px)]' />
      </div>
    </section>
  )
}
