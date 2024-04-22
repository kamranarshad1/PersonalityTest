const Option = ({ label, onSelect, isSelected, optionLabel }) => {
  const handleClick = () => {
    onSelect()
  }

  return (
    <div
      className={`option ${
        isSelected ? 'selected' : ''
      } relative pt-[20px] px-5 pb-5 mt-[5px] gap-[10px]text-base text-black font-urbanist lg:gap-[90px] mq450:gap-[45px] rounded-xl bg-white opacity-[0.8]`}
      style={{
        border: isSelected ? '5px solid orange' : 'none',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <b className='relative uppercase whitespace-nowrap z-[1]'>
        {' '}
        <span>{optionLabel} : </span>
        {label}{' '}
      </b>
    </div>
  )
}

export default Option
