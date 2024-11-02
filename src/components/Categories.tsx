"use client"
import CategoriesCarousel from "./CategoriesCarousel";
import Title from "./ui/Title";
import SubTitle from "./ui/SubTitle";
import { useRef } from "react";
import CarouselButton from "./ui/CarouselButton";
import { FaChevronRight } from "react-icons/fa";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

export default function Categories({ categories }) {

    const carouselRef = useRef(null);

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
        <section className="py-[70px]">
            <div className="container mx-auto ">
                <div className="flex justify-between items-end mb-[60px]">
                    <div>
                        <Title title={"Categories"} />
                        <SubTitle subtitle={'Browse By Category'} />
                    </div>
                    <div className="flex gap-2">
                        <CarouselButton onClick={handlePrev} icon={<GrFormPreviousLink size={24} />} />
                        <CarouselButton onClick={handleNext} icon={<GrFormNextLink size={24} />} />
                    </div>
                </div>

                <CategoriesCarousel ref={carouselRef} categories={categories} />
            </div>
        </section>
    );
}
