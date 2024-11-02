import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaApple } from 'react-icons/fa'
import { GoArrowRight } from 'react-icons/go'

const HeroCarouselItem = () => {
    return (
        <div className='text-white bg-text2 pt-[58px] pb-[47px] pl-[64px] relative'>
            <div className='grid grid-cols-2'>
                <div>
                    <div className='flex items-center mb-5'>
                        <span><FaApple size={49} /></span>
                        <p>iPhone 14 Series</p>
                    </div>
                    <h3 className='font-semibold text-5xl mb-5'>Up to 10% <br /> off Voucher</h3>
                    <Link href={'/'} className='flex items-center'>Shop Now <GoArrowRight className='ms-3' size={20} />  </Link>
                </div>
                <Image  src={'/images/hero.png'} alt={'hero'} width={600} height={600} />
            </div>



        </div>
    )
}

export default HeroCarouselItem