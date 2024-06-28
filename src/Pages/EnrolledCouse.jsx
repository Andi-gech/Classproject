import React from 'react'
import CourseCard from '../Components/CourseCard'
import UseFetchAllCourse from '../Hooks/UseFetchAllEnrolles'
import UseFetchCourse from '../Hooks/UseFetchAllCourses'
import { Link } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
import ErrorPopup from '../Components/ErrorPopup'

export default function EnrolledCouse() {

  const {data,isLoading,error}=UseFetchCourse()
  
  return (
    <div className='ml-[20%] w-[80%]  min-h-[99vh]   flex flex-col  py-5 overflow-auto  '>
     
     
      <div className='w-full relative h-[40px]  px-4    items-center flex  flex-row'>
        <p className='text-xl text-gray-800 dark:text-white font-bold'>Find All Courses Courses</p>
        <input type="text" placeholder='Search' className='w-[300px] ml-[30px] h-[32px] border-b-[1px]  outline-none text-white bg-transparent  p-2'/>
        {isLoading && <div className=' mx-4'><ColorRing
  visible={true}
  height="40"
  width="40"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['blue','blue','blue','blue','blue','blue','blue']}
  /></div>}
  {error && <div className='absolute top-[1px] right-[15%]'><ErrorPopup error={error.message}/></div>}

      </div>
      
      <div className='w-[90%] px-[10px] mt-5  flex  flex-row flex-wrap'>
   {data?.data?.map(course=>
   <>
    <Link to={`/enroll/${course?._id}`} className='w-[300px] shadow-md rounded-md m-2 shadow-gray-200 cursor-pointer hover:opacity-90  mx-2  h-[300px]'> <img src={`http://localhost:8080/images/${course?.image}`} className='w-full h-[50%] rounded-md'/>
   <div className='w-full  p-2  flex  flex-col'><p className='font-bold dark:text-white text-black'> {course.name}</p>
   <p className='text-sm text-gray-400   line-clamp-2 w-full'>{course.description} </p>
   <div className='w-[80%] h-[40px] flex items-center justify-center  mt-4 rounded-md bg-blue-700'>
  <p className='text-white font-bold'>Enroll</p>
   </div>
   </div></Link>
   
  </>
  
  
  
  )}
   

      </div>
    </div>
  )
}
 