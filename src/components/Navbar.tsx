import Link from 'next/link'
import React from 'react'
import SearchInput from './ui/SearchInput'
import { FaRegHeart } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
    return (
        <nav className='pt-[40px] pb-4 border-b-button border border-opacity-50'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <Link className='font-bold text-[24px]' href={'/'}>Royal Class</Link>
                    <ul className='flex gap-[48px]'>
                        <li>
                            <Link className='underline' href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/contact'}>Contact</Link>
                        </li>
                        <li>
                            <Link href={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link href={'/Sign Up'}>Sign Up</Link>
                        </li>

                    </ul>
                    <div className='flex items-center gap-4'>
                        <SearchInput  />
                        <Link href={'/'} ><FaRegHeart size={24} /></Link>
                        <Link href={'/'} ><FiShoppingCart size={24} /></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar