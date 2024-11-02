import React from 'react'
import SideLinks from './SideLinks'
import HeroCarousel from './HeroCarousel'

const HeroBanner = () => {
    return (
        <section className="" >
            <div className='container mx-auto '>
                <div className='grid grid-cols-5 gap-11'>
                    <div className="col-span-1  ">
                        <SideLinks />
                    </div>
                    <div className="col-span-4 ">
                        <HeroCarousel/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroBanner