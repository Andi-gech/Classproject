import React from 'react'
import ProgressBar from './ProgressBar'
import { BiPlay } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import UseFetchEachCourse from '../Hooks/UseFetchAllModules'
import UseFetchAllModules from '../Hooks/UseFetchAllModules'
import UseFetchSingleCourse from '../Hooks/UseFetchSingleCourse'
import { AiFillTrophy } from 'react-icons/ai'

export default function CourseCard({data}) {

return(
  <Link to={`/learn/${data?.course?._id}`} className='   w-[300px] relative  rounded-md overflow-hidden hover:scale-[1.01]  duration-300  transition-transform  my-[1px]    flex  flex-col  items-start shrink-0  mx-2  h-[230px]'>
    <img src={`http://192.168.1.15:8080/images/${data?.course?.image}`} className='w-full  object-cover  mb-[2px] rounded-md h-[150px]'/>
     {
      data?.completedModules?.length===data?.course?.coursemodules?.length
      && <div className='absolute flex-col  top-0 w-full h-[150px]  z-[500]   duratioan-75 hover:transform hover:bg-blue-800 flex items-center justify-center  cursor-pointer hover:bg-opacity-40'>
      <AiFillTrophy className='  text-[150px] text-yellow-500  opacity-50'/>
      <p className='text-3xl font-extrabold text-yellow-500 opacity-45 '>Completed</p>
      </div>
}
    
    
    <div className='text-black dark:text-white text-[16px] line-clamp-1  mx-1 font-semibold '>{data?.course?.name}</div>
    <p className=' text-gray-400 text-sm w-full mx-1'>{data?.completedModules?.length} module Completed from {data?.course?.coursemodules?.length}  modules </p>
<div className='mt-[10px] mx-1 h-[40px] w-full '>
<ProgressBar percentage={(data?.completedModules?.length/data?.course?.coursemodules?.length)*100} />
</div>
</Link>
)

}