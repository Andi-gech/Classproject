import React from 'react'
import UseFetchNotApprovedCourse from '../Hooks/UseNotApprovedCourse'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ColorRing } from 'react-loader-spinner'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function AdminCourseManagment() {
  const {data}=UseFetchNotApprovedCourse()
  const queryClient=useQueryClient()
  const authHeader=useAuthHeader()
  const mutation=useMutation({
    mutationFn:(data)=>axios.put(`http://localhost:8080/api/admin/courses/approve/${data}`,{},{headers:{'_auth':`${authHeader}`}}),
    onSuccess:()=>{
      queryClient.invalidateQueries(['fechNotApprovedCourses'])
    },
    onError:(error)=>{
      console.log(error)
    }
  })

  return (
    <div className='w-[82%] bg-white h-screen ml-[18%] p-4'>
      <div className='w-full h-[50px] flex flex-row'>
          <p className='text-2xl font-bold'>Approve Courses</p>

    {
                    mutation.isPending &&<div>
            <ColorRing
  visible={true}
  height="40"
  width="40"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['blue','blue','blue','blue','blue','blue','blue']}
  />
                    </div>
                }
             
        </div>
        {
          data?.data?.length===0 ?<div className="w-[50%] bg-gray-50 bg-opacity-10 h-[100px] flex flex-row  items-center justify-center">
            <p className='text-md'> No Course To Approve</p>
          </div>
        :
      <div className='w-[90%] overflow-y-scroll  h-[450px] flex flex-row flex-wrap'>
       
        {data?.data?.map((data)=>{
          return (
            
  <div className='  mt-3  w-[300px]   shadow-md bg-white shadow-gray-300 relative  rounded-md overflow-hidden   duration-300  transition-transform  my-[1px]    flex  flex-col  items-start shrink-0  mx-2  h-[270px]'>
  <img src={`http://localhost:8080/images/${data?.image}`} className='w-full  object-cover  mb-[2px] rounded-md h-[150px]'/>
  <div className='text-black dark:text-white text-[16px] line-clamp-1  mx-1 font-semibold '>{data?.name}</div>
  <p className=' text-gray-400 text-sm w-full mx-1 line-clamp-1'>{data?.description} </p>

<div onClick={()=>mutation.mutate(data?._id)} className='mt-[10px] mx-1 h-[40px] w-[95%] cursor-pointer flex rounded-md justify-center items-center hover:bg-blue-800 bg-blue-600'>
  <p className='text-white font-bold'>Approve</p>

</div>
<p className='py-[10px] text-blue-400  hover:underline  cursor-pointer mx-2'>see details</p>
</div>)
        })}
      </div>}
    </div>
  )
}
