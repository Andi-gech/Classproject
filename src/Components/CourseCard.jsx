import React from 'react'
import ProgressBar from './ProgressBar'
import { BiPlay } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import UseFetchEachCourse from '../Hooks/UseFetchAllModules'
import UseFetchAllModules from '../Hooks/UseFetchAllModules'
import UseFetchSingleCourse from '../Hooks/UseFetchSingleCourse'

export default function CourseCard({data}) {

const {data:coursedata}=UseFetchSingleCourse(data.course)

  

return (

  <Link to={`/learn/${coursedata?.data?._id}`} className='  w-[300px] relative  rounded-md overflow-hidden hover:scale-[1.01]  duration-300  transition-transform  my-[1px]    flex  flex-col justify-center items-start shrink-0  mx-2 h-[200px]'>
    <div  className='absolute  top-0 w-full h-full  z-[500]   duratioan-75 hover:transform hover:bg-blue-800 flex items-center justify-center  cursor-pointer hover:bg-opacity-40'>
<BiPlay className='text-3xl text-white '/>
    </div>
    <div className='absolute bottom-0 bg-gradient-to-b   from-transparent via-transparent to-zinc-900 w-full h-full z-[200]'></div>
    <img src={`http://localhost:8080/images/${coursedata?.data?.image}`} className='w-full   mb-2 rounded-md h-full'/>
    <div className=' absolute  z-[300] mb-[10px]  bottom-0 w-full h-[60px] flex    flex-col'>
      <p className=' text-[18px] font-bold  text-white line-clamp-2 w-full '> {coursedata?.data?.name} </p>
      <p className=' text-gray-400 w-full'>{data?.completedModules?.length}  course Completed </p>

      <ProgressBar percentage={(data?.completedModules?.length/coursedata?.data?.coursemodules.length)*100} />
    </div>
  

  </Link>
  
  )
}

