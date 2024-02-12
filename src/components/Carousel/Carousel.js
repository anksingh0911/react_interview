import React, { useState, useEffect } from 'react';
import { carouselData } from '../../utils/carousel';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000); // Change the interval based on your preference
    return () => clearInterval(interval);
  }, [currentIndex, carouselData.length]);


  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };


  return (
    <div className='relative w-full flex overflow-hidden flex-col justify-center'>
      <div className='inner whitespace-nowrap flex transition-all duration-500 shadow-md' style={{transform:`translate(-${currentIndex*100}%)`}}>
        {carouselData.map(item=>(
          <div className='min-w-full h-[400px] inline-flex items-center justify-center bg-gray-100'>
            {item.text}
          </div>
        ))}
      </div>
      <button className='border p-1 absolute left-0 bg-green-400 text-white' onClick={goToPreviousSlide}>
        prev
      </button>
      <button className='border p-1 absolute right-0 bg-green-400 text-white' onClick={goToNextSlide} >
        Next
      </button>
    </div>
  )
}

export default Carousel;