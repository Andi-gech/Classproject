import React from 'react'
import CourseCard from '../Components/CourseCard'
import UseFetchAllCourse from '../Hooks/UseFetchAllCourse'
import UseFetchCourse from '../Hooks/UseFetchCourse'
import { Link } from 'react-router-dom'

export default function EnrolledCouse() {
  const {data}=UseFetchAllCourse()
  const {data:coursedata}=UseFetchCourse()
  
  return (
    <div className='ml-[20%] w-[80%] flex flex-col  '>
      <div className='w-full h-[40px]  px-4 p-[10px]   items-center flex  flex-row'>
        <p className='text-xl  dark:text-white font-semibold'>Completed Courses</p>
      </div>
      <div className='w-full px-[50px] h-full flex pt-[10px] flex-row flex-wrap'>
        {data?.data?.map(course=><CourseCard id={course._id} data={course}/>)}
      
       
      
      </div>
      <div className='w-full h-[40px]  px-4 p-[10px]  items-center flex  flex-row'>
        <p className='text-xl text-gray-800 dark:text-white font-bold'>Enroll More Courses</p>
        <input type="text" placeholder='Search' className='w-[300px] ml-[30px] h-[32px] border-b-[1px]  outline-none text-white bg-transparent  p-2'/>
      </div>
      <div className='w-[80%] overflow-hidden px-[50px] h-full flex pt-[10px] flex-row flex-wrap'>
   {coursedata?.data?.map(course=><Link to={`/enroll/${course?._id}`} className='w-[300px] cursor-pointer hover:opacity-90 my-4 mx-2 h-[200px]'> <img src={"https://picsum.photos/300/130"} className='w-full h-[80%] rounded-md'/>
   <div className='w-full h-[20%]  mt-2 flex  flex-col'><p className='font-bold text-white'> {course?.name}</p>
   <p className='text-sm text-gray-400'>{course?.modules?.length}+ Modules </p></div></Link>)}

      </div>
    </div>
  )
}
