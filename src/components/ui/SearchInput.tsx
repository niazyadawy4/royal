import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchInput = () => {
  return (
    <div className='mr-3 relative'>
        <input type="text" placeholder='What are you looking for?' className='bg-secondary py-[10px] pr-10 ps-[10px]' />
        <button className='absolute right-[12px] top-[50%] translate-y-[-50%]'><CiSearch size={24} /> </button>
    </div>
  )
}

export default SearchInput