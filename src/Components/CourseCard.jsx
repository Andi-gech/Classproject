import React from 'react'
import ProgressBar from './ProgressBar'
import { BiPlay } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function CourseCard({id}) {
  return (

  <Link to={`/courseName/courseModule/${id}`} className=' w-[300px] relative overflow-hidden  hover:scale-[1.01]  duration-300  transition-transform  my-2 shadow-md shadow-gray-300  dark:shadow-gray-800  flex  flex-col justify-center items-start shrink-0  mx-2 h-[200px]'>
    <div  className='absolute  top-0 w-full h-[130px]     duration-75 hover:transform hover:bg-blue-600 flex items-center justify-center  cursor-pointer hover:bg-opacity-20'>
<BiPlay className='text-3xl text-white '/>
    </div>
    <img src='https://picsum.photos/300/130' className='w-full  rounded-md h-[130px]'/>
    <div className=' w-[90%] h-[70px] flex items-center    flex-col'>
      <p className=' text-[15px] font-bold  dark:text-white line-clamp-2 w-full '> How To Become Full Stack Developer in 2 month NodeJs for Beginners🥇 </p>
      <ProgressBar percentage={56 } />
    </div>
  

  </Link>
  
  )
}
