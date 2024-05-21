import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UseFetchCourse from '../Hooks/UseFetchCourse'
import UseFetchEachCourse from '../Hooks/useFechEachCourse'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function EnrollPage() {
  const {courseid}=useParams()
  const {data}=UseFetchEachCourse(courseid)
  const [error,setError]=useState()
  const [sucess,setSucess]=useState()
  const authHeader = useAuthHeader()
  const navigate = useNavigate()
const handleEnroll=async()=>{
  try{ 
    const result = await axios.post(`http://localhost:8080/api/enrolledcourse`,{
      course:courseid
    }, {headers:{'_auth':`${authHeader}`}})
    if (result.status === 200) {

      setSucess(result.data.message)
    navigate('/EnrolledCourse')
      

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
      <img src='https://picsum.photos/300/130' className='w-[450px] h-[350px]  rounded-md'/>
      <div  className=' h-[200px] ml-5'>
      {error && <p className='text-red-500'>{error}</p>}
        <p className='font-bold w-full text-[25px]'>{data?.data?.name} {"{ course Category}"}</p>
        <p className=' text-gray-400  w-[300px]'>{"This is the description of the course w/c describe the course."}</p>
     <div className='w-[300px] h-[300px] overflow-y-auto overflow-x-hidden '>
      {data?.data?.modules?.map(module=><div key={module?._id} className='w-[300px] h-[60px] mt-2  items-center shadow-sm rounded-md shadow-zinc-200 bg-slate-100 bg-opacity-30  flex p-2'>
        <p>{module?.lesson?.name}</p>
      </div>)}
    
      
     </div>
    
      
      </div>
      <div onClick={handleEnroll} className='w-[150px]  cursor-pointer ml-4 rounded-lg h-[50px] flex items-center justify-center bg-purple-400'> 
      <p>Enroll</p></div>
    </div>
  )
}
