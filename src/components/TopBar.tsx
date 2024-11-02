import Link from 'next/link'
import React from 'react'

const TopBar = () => {
    return (
        <section className='bg-button py-3 text-white'>
            <div className='container mx-auto'>
                <div className='relative'>
                    <div className='flex justify-center text-[14px]'>
                        <p className='text-center '>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </p>
                        <Link className='ms-2 font-semibold underline' href={'/'}>Shop Now</Link>
                    </div>
                    <select name="" id="" className='absolute right-0 top-[50%] translate-y-[-50%] bg-button'> 
                        <option value="English">English</option>
                        <option value="Arabic">Arabic</option>
                    </select>

                </div>
            </div>
        </section>
    )
}

export default TopBar