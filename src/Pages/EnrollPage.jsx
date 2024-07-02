import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UseFetchCourse from '../Hooks/UseFetchAllCourses'
import UseFetchEachCourse from '../Hooks/UseFetchAllModules'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import UseFetchEnrollCourse from '../Hooks/UseFechSingleEnrollCourse'
import UseFetchSingleCourse from '../Hooks/UseFetchSingleCourse'

export default function EnrollPage() {
  const {courseid}=useParams()
  const {data}=UseFetchEachCourse(courseid)
  const {data:enroll,refetch}=UseFetchEnrollCourse(courseid)
  const {data:course}=UseFetchSingleCourse(courseid)
  const [error,setError]=useState()
  const [sucess,setSucess]=useState()
  const authHeader = useAuthHeader()
  const navigate = useNavigate()
const handleEnroll=async()=>{
  try{ 
    const result = await axios.post(`http://localhost:8080/api/enroll/enroll`,{
      course:courseid
    }, {headers:{'_auth':`${authHeader}`}})
    if (result.status === 200) {

      setSucess(result.data.message)
      refetch()
      

    } 
  }catch(err){
    setError(err.response.data)
    setTimeout(() => {
      setError(null);
    }, 3000);
    console.log(err.response.data)
  }
}
  return (
    <div className='ml-[20%] w-[80%] flex flex-row  items-center  overflow-hidden p-[100px]'>
      <img src={`http://localhost:8080/images/${course?.data?.image}`} className='w-[450px] h-[350px]  rounded-md'/>
      <div  className=' h-[200px] ml-5'>
      {error && <p className='text-red-500'>{error}</p>}
        <p className='font-bold w-full  dark:text-white text-[25px]'>{course?.data?.name} </p>
        <p className=' text-gray-400  w-[300px] line-clamp-3'>{course?.data.description}</p>
     <div className='w-[300px] h-[300px] overflow-y-auto overflow-x-hidden '>
      {data?.data?.modules?.map(module=><div key={module?._id} className='w-[300px] h-[60px] mt-2  items-center shadow-sm rounded-md shadow-zinc-200 bg-slate-100 bg-opacity-30  flex p-2'>
        <p>{module?.lesson?.name}</p>
      </div>)}
      <div className='w-[300px] h-[60px] mt-2  items-center shadow-sm rounded-md shadow-zinc-200 bg-slate-100 bg-opacity-30  flex p-2'>
        <p className=' font-bold text-[18px]'>By</p>
        <img src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} className='w-[40px] h-[40px] rounded-full ml-2'/>

        <p className='mx-2 font-bold text-gray-400'>{course?.data?.createdBy.fullName}</p>
      </div>
      <div className=' mt-4'>
      { enroll?.data?.length===0 ?
      <div onClick={handleEnroll} className='w-[150px]  cursor-pointer ml-4 rounded-lg h-[50px] flex items-center justify-center bg-black'> 
      <p className='text-white'>Enroll</p></div>:
      <div  className='w-[150px]  cursor-pointer ml-4 rounded-lg h-[50px] flex items-center justify-center bg-gray-500'> 
      <p className='text-white'>Enrolled</p></div>}
      </div>
    
      
     </div>
     
    
      
      </div>
    
    </div>
  )
}
