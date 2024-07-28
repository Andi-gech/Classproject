import React, { useEffect } from 'react'
import CourseCard from '../Components/CourseCard'
import UseFetchAllCourse from '../Hooks/UseFetchAllEnrolles'
import UseFetchCourse from '../Hooks/UseFetchAllCourses'
import { Link } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
import ErrorPopup from '../Components/ErrorPopup'
import { useState } from 'react'

export default function EnrolledCouse() {

  const [searchparams,setSearchParams]=useState(null)
  
  const {data,isLoading,error,refetch}=UseFetchCourse(searchparams,"")
  useEffect(() => {
    refetch()
  }, [searchparams]);

  
  return (
    <div className='sm:ml-[18%] sm:w-[82%] w-full  px-4 bg-white dark:bg-slate-950  min-h-[100vh]   flex flex-col  py-5 overflow-auto  '>
     
     
      <div className='w-full relative h-[40px]  px-4   py-[40px] sm-py-[0px]  items-center flex  flex-row'>
        <p className='text-xl text-gray-800 dark:text-white font-bold'>Find All Courses Courses</p>
        <input type="text" value={searchparams} placeholder='Search' onChange={(e)=>setSearchParams(e.target.value)} className='w-[300px] ml-[30px] h-[32px]  text-black dark:text-white border-b-[1px]  outline-none  bg-transparent  p-2'/>
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
    <Link to={`/enroll/${course?._id}`} className='w-[300px] shadow-md rounded-md m-2 shadow-gray-200 dark:shadow-gray-800 cursor-pointer hover:scale-[1.05]  transform transition-transform  duration-1000 hover:opacity-90  mx-2  h-[300px]'> <img src={`http://localhost:8080/images/${course?.image}`} className='w-full h-[50%] rounded-md'/>
   <div className='w-full  p-2  flex  flex-col'><p className='font-bold dark:text-white text-black'> {course.name}</p>
   <p className='text-sm text-gray-400   line-clamp-2 w-full'>{course.description} </p>
   <div className='w-[80%] h-[40px] flex items-center justify-center  mt-4 rounded-md bg-blue-700'>
  <p className='text-white font-bold'>Enroll</p>
   </div>
   </div></Link>
   
  </>
  
  
  
  )}
  {data?.data?.length===0&&
  <div className='text-black dark:text-white w-full  h-full flex items-center justify-center'>
  <p className='text-gray-600'>No  course  data Found !! </p>
  </div>}
   

      </div>
    </div>
  )
}
 