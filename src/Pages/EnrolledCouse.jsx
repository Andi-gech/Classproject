import React from 'react'
import CourseCard from '../Components/CourseCard'
import UseFetchAllCourse from '../Hooks/UseFetchAllEnrolles'
import UseFetchCourse from '../Hooks/UseFetchAllCourses'
import { Link } from 'react-router-dom'

export default function EnrolledCouse() {
  const {data}=UseFetchAllCourse()
  const {data:coursedata}=UseFetchCourse()
  
  return (
    <div className='ml-[20%] w-[80%] flex flex-col  '>
     
      <div className='w-full h-[40px]  px-4 p-[10px]  items-center flex  flex-row'>
        <p className='text-xl text-gray-800 dark:text-white font-bold'>Find All Courses Courses</p>
        <input type="text" placeholder='Search' className='w-[300px] ml-[30px] h-[32px] border-b-[1px]  outline-none text-white bg-transparent  p-2'/>
      </div>
      <div className='w-[80%] overflow-hidden px-[50px] h-full flex pt-[10px] flex-row flex-wrap'>
   {coursedata?.data?.map(course=><Link to={`/enroll/${course?._id}`} className='w-[300px] cursor-pointer hover:opacity-90 my-4 mx-2 h-[200px]'> <img src={`http://localhost:8080/images/${course?.image}`} className='w-full h-[80%] rounded-md'/>
   <div className='w-full h-[20%]  mt-2 flex  flex-col'><p className='font-bold dark:text-white text-black'> {course.name}</p>
   <p className='text-sm text-gray-400'>{course?.modules?.length}+ Modules </p></div></Link>)}

      </div>
    </div>
  )
}
 