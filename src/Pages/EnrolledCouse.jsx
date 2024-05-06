import React from 'react'
import CourseCard from '../Components/CourseCard'

export default function EnrolledCouse() {
  return (
    <div className='ml-[20%] w-[80%] flex flex-col  '>
      <div className='w-full h-[100px]  p-[20px] items-center flex  flex-row'>
        <p className='text-2xl font-bold'>Completed Courses</p>
      </div>
      <div className='w-full px-[50px] h-full flex pt-[20px] flex-row flex-wrap'>
        <CourseCard id={1}/>
        <CourseCard id={2}/>
        <CourseCard id={3}/>
       
      
      </div>
      <div className='w-full h-[100px]  p-[20px] items-center flex  flex-row'>
        <p className='text-2xl font-bold'>On Going Courses</p>
      </div>
      <div className='w-full px-[50px] h-full flex pt-[20px] flex-row flex-wrap'>
        <CourseCard id={4}/>
        <CourseCard id={5}/>
        <CourseCard id={6}/>
        <CourseCard id={7}/>
        <CourseCard id={8}/>
        <CourseCard id={9}/>
   
      </div>
    </div>
  )
}
