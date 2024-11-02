import Image from 'next/image';
import React from 'react';
import Rating from './ui/Rating';
import { FaRegHeart } from 'react-icons/fa';
import { IoEyeOutline } from 'react-icons/io5';

const ProductItem = ({ product }) => {
    return (
        <div>
            <div className='text-center flex justify-center bg-secondary py-9 px-10 rounded-[4px] relative overflow-hidden group'>
                <Image
                    className='h-[180px] object-contain'
                    src={product.images[0]}
                    alt={product.title}
                    width={190}
                    height={180}
                />
                <div className='absolute top-[12px] right-[12px]'>
                    <button className='w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center mb-2'><FaRegHeart size={16}/></button>
                    <button className='w-[34px] h-[34px] bg-white rounded-full flex items-center justify-center'><IoEyeOutline  size={16}/></button>
                </div>
                <button className='absolute bottom-0 left-0 w-full bg-button text-white font-medium p-2 opacity-0 group-hover:opacity-100 transition duration-200'>
                    Add to cart
                </button>
            </div>
            <div className='pt-4 font-medium'>
                <h4 className='mb-2'>{product.title}</h4>
                <span className='text-secondary2'>${product.price}</span>
                <div className='flex items-center gap-2 text-text2'>
                    <Rating rating={4.5} />
                    <span className='opacity-50'>(56)</span>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
