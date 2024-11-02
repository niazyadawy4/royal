import React from 'react'

const Title = ({title}) => {
  return (
   <h2 className='text-secondary2 font-semibold title flex flex-wrap items-center mb-[20px] '><span className='block bg-secondary2 w-[20px] h-[40px] mr-4 rounded-[4px]'></span> {title}</h2>
  )
}

export default Title