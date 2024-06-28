import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi'; // Import BiErrorCircle icon for error message
import CourseCard from './CourseCard';
 // Import CSS file for styles

export default function SlideCards({ data }) {
  const [translate, setTranslate] = useState(0);

  const maxTranslate = (data?.data?.length - 2) * 90; // Calculate the maximum translation

  const handleNext = () => {
    if (translate < maxTranslate) {
      setTranslate(translate + 90);
    }
  };

  const handlePrev = () => {
    if (translate > 0) {
      setTranslate(translate - 90);
    }
  };

  return (
    <div className='min-w-full overflow-x-hidden pl-2 relative'>
      <div
        onClick={handlePrev}
        className='absolute bg-opacity-50 overflow-hidden flex items-center justify-center shadow-sm shadow-zinc-600 backdrop:blur-md bg-white rounded-full z-20 top-[55px] left-0 w-[50px] h-[50px] bg-gray-[50px]'
      >
        <FaAngleDoubleLeft />
      </div>

      <div
        onClick={handleNext}
        className='absolute bg-opacity-50 shadow-sm shadow-zinc-600 backdrop:blur-md bg-white rounded-full z-20 top-[55px] right-0 w-[50px] h-[50px] flex items-center justify-center bg-gray-[50px]'
      >
        <FaAngleDoubleRight />
      </div>
      <div
        style={{ transform: `translateX(-${translate}%)`,
        transition: 'transform 0.6s ease-in-out' }}
        className='w-full flex  flex-row     duration-300'
      >
        {data?.data?.map((data) => (
          <CourseCard key={data?._id} data={data} id={data?._id} />
        ))}
      </div>

      {data?.data?.length === 0 && (
        <p className='bg-opacity-50 text-[20px] flex items-center justify-center h-[150px] w-[90%] text-gray-400 flex-row'>
          <BiErrorCircle /> &nbsp;No Course Found
        </p>
      )}
    </div>
  );
}
