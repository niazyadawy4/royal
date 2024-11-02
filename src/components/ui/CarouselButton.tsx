import React from 'react';

const CarouselButton = ({ onClick, icon }) => {
  return (
    <button 
      onClick={onClick} 
      className="flex items-center justify-center bg-secondary w-[45px] h-[45px] rounded-full hover:bg-secondary2 transition duration-200 hover:text-primary" 
    >
      {icon && <span >{icon}</span>} 
      
    </button>
  );
};

export default CarouselButton;
