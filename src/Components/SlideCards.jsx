import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { BiErrorCircle } from 'react-icons/bi'; // Import BiErrorCircle icon for error message
import CourseCard from './CourseCard';
 // Import CSS file for styles

export default function SlideCards({ data,isLoading}) {
  const [translate, setTranslate] = useState(0);

  const maxTranslate = (data?.data?.length /1.6) * 20; // Calculate the maximum translation
console.log(maxTranslate,"max")
console.log(data?.data.length)
  const handleNext = () => {
    console.log(translate,"tran")
    if (translate < maxTranslate) {
      
      setTranslate(translate + 50);
    }
  };

  const handlePrev = () => {
    if (translate > 0) {
      setTranslate(translate - 50);
    }
  };

  return (
    <div className='min-w-full overflow-x-hidden pl-2 relative'>
      {isLoading ?<div className='w-full h-[300px] flex flex-row '>
        <div className='w-[280px] mx-3 h-full '>
          <div className='w-full  h-[200px] rounded-md animate-pulse bg-gray-300 dark:bg-gray-700'>
            </div>
            <div className='w-[220px] h-[15px] rounded-full mt-2 animate-pulse bg-gray-300 dark:bg-gray-700'>
              </div>
              <div className='w-[90%] h-[10px] rounded-full mt-2 animate-pulse bg-gray-300 dark:bg-gray-700'>
              </div>
            </div>
            <div className='w-[280px] mx-3 h-full '>
          <div className='w-full  h-[200px] rounded-md animate-pulse bg-gray-300 dark:bg-gray-700'>
            </div>
            <div className='w-[220px] h-[15px] rounded-full mt-2 animate-pulse bg-gray-300 dark:bg-gray-700'>
              </div>
              <div className='w-[90%] h-[10px] rounded-full mt-2 animate-pulse bg-gray-300 dark:bg-gray-700'>
              </div>
            </div>
      </div>:
      <>
      <div
        onClick={handlePrev}
        className='absolute hidden bg-opacity-50 overflow-hidden sm:flex items-center justify-center shadow-sm shadow-zinc-600 backdrop:blur-md bg-white rounded-full z-20 top-[55px] left-0 w-[50px] h-[50px] bg-gray-[50px]'
      >
        <FaAngleDoubleLeft />
      </div>

      <div
        onClick={handleNext}
        className='absolute hidden sm:flex bg-opacity-50 shadow-sm shadow-zinc-600 backdrop:blur-md bg-white rounded-full z-20 top-[55px] right-0 w-[50px] h-[50px]  items-center justify-center bg-gray-[50px]'
      >
        <FaAngleDoubleRight />
      </div>

      <div
     
        className='w-full flex   flex-row  overflow-x-scroll sm:overflow-x-hidden   duration-300'
      >
        <div className='flex flex-row'    style={{ transform: `translateX(-${translate}%)`,
        transition: 'transform 0.6s ease-in-out' }}>
        {data?.data?.map((data) => (
          <CourseCard key={data?._id} data={data} id={data?._id} />
        ))}
        </div>
      
      </div>

      {data?.data?.length === 0 && (
        <p className='bg-opacity-50 text-[20px] flex items-center justify-center h-[150px] w-[90%] text-gray-400 flex-row'>
          <BiErrorCircle /> &nbsp;No Course Found
        </p>
      )}
      </>
}
    </div>
  );
}
