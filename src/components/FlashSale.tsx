"use client"
import React, { useEffect, useRef, useState } from 'react'
import Title from './ui/Title'
import SubTitle from './ui/SubTitle'
import CarouselButton from './ui/CarouselButton'
import FlashSalesCarousel from './FlashSalesCarousel'
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'
import Timer from './ui/Timer'
import MainButton from './ui/MainButton'

const FlashSale = ({ products }) => {

    const carouselRef = useRef(null);
    const containerRef = useRef(null);
    const carouselWrapperRef = useRef(null);
    const sectionRef = useRef(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [carouselWrapperWidth, setCarouselWrapperWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const sectionWidth =sectionRef.current.offsetWidth;
            const sideSpace = (sectionWidth - containerWidth ) / 2;
            const newWidth = sectionWidth -sideSpace ;
            carouselWrapperRef.current.style.width = `${newWidth}px`;
            carouselWrapperRef.current.style.left = `${sideSpace}px`;
    
            console.log('Container Width:', sideSpace);
        }
    }, []);
    

    // Function to go to the next slide
    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.swiper.slideNext(); // Call slideNext method from CategoriesCarousel
        }
    };

    // Function to go to the previous slide
    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.swiper.slidePrev(); // Call slidePrev method from CategoriesCarousel
        }
    };


    return (
        <section className="py-[70px]" ref={sectionRef}>
            <div className="container mx-auto " ref={containerRef}> 
                <div className="flex justify-between items-end mb-[60px]">
                    <div>
                        <Title title={"Today’s"} />
                        <div className='flex items-end'>
                            <SubTitle subtitle={'Flash Sales'} />
                            <Timer targetDate={'2024-12-31'} />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <CarouselButton onClick={handlePrev} icon={<GrFormPreviousLink size={24} />} />
                        <CarouselButton onClick={handleNext} icon={<GrFormNextLink size={24} />} />
                    </div>
                </div>




            </div>
            <div ref={carouselWrapperRef} className='relative'>

                <FlashSalesCarousel ref={carouselRef} products={products} />
            </div>
            <div className='mt-[60px] flex justify-center'>
                <MainButton text={'View All Products'} />
            </div>
        </section>
    )
}

export default FlashSale