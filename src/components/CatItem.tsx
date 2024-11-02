import Image from 'next/image'
import React from 'react'

const CatItem = ({category}) => {
  return (
    <div key={category.id} className='rounded-lg p-6 border flex justify-center flex-col items-center  hover:bg-secondary2 transition duration-200 hover:text-white'>
        <Image className='mb-4' src={category.image} alt={category.name} width={56} height={56} />
        <h5>{category.name}</h5>
    </div>
  )
}

export default CatItem