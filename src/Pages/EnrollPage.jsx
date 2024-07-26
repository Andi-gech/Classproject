import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UseFetchCourse from '../Hooks/UseFetchAllCourses'
import UseFetchEachCourse from '../Hooks/UseFetchAllModules'
import axios from 'axios'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'
import UseFetchEnrollCourse from '../Hooks/UseFechSingleEnrollCourse'
import UseFetchSingleCourse from '../Hooks/UseFetchSingleCourse'
import chapaicon from '../assets/chapaicon.png'
import { useMutation } from '@tanstack/react-query'
import { ColorRing } from 'react-loader-spinner'
import ErrorPopup from '../Components/ErrorPopup'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

export default function EnrollPage() {
  const {courseid}=useParams()
  const {data}=UseFetchEachCourse(courseid)
  const {data:enroll,refetch}=UseFetchEnrollCourse(courseid)
  const {data:course}=UseFetchSingleCourse(courseid)
  const [error,setError]=useState()
  const [sucess,setSucess]=useState()
  const authHeader = useAuthHeader()
  const navigate = useNavigate()
  const mutation=useMutation({
    mutationFn:()=>axios.post(`http://192.168.1.15:8080/api/enroll/pay/${courseid}`,{},{
      headers: {
        '_auth': authHeader
      },
    }),
    mutationKey:['enroll'],
    onSuccess:(data)=>{
      window.location.href=data.data.data.checkout_url
    },
    onError:(err)=>{
      setError(err.response.data)
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  })

  return (
    <div className='sm:ml-[18%] bg-white dark:bg-slate-950 relative sm:w-[82%] w-full h-screen flex sm:flex-row  flex-col  items-center justify-center  sm:px-[100px] overflow-hidden '>
      <div className='w-full h-[100px]  absolute top-[10px] flex  items-center flex-row'>
        <div className='w-[50px] h-[50px]  bg-slate-50 dark:bg-slate-950 shadow-gray-400 shadow-sm  rounded-full flex items-center justify-center'>
          <AiOutlineArrowLeft onClick={() => navigate(-1)} className='text-black dark:text-white rounded-full text-[30px] cursor-pointer'/>
        </div>
      </div>
      {mutation.isPending && <div className='w-full h-full left-0  bg-zinc-900 backdrop-blur-sm bg-opacity-30 absolute flex items-center justify-center  '>
        <div className='w-[100px] h-[100px] bg-white rounded-md flex items-center justify-center'><ColorRing visible={true} height="40"  width="40" ariaLabel="color-ring-loading" wrapperStyle={{}} wrapperClass="color-ring-wrapper" colors={['blue','blue','blue','blue','blue','blue','blue']} /> 
        </div>
        </div>}
        {error && <div className='absolute z-[100] top-[80px] right-[100px]'><ErrorPopup error={error}/></div>}
      <img src={`http://192.168.1.15:8080/images/${course?.data?.image}`} className='w-[450px] h-[350px]  rounded-md'/>
      {/* <div  className=' h-[200px] ml-5'>
        
      
        <p className='font-bold w-full  dark:text-white text-[25px]'>{course?.data?.name} </p>
        <p className=' text-gray-400  w-[300px] line-clamp-3'>{course?.data.description}</p>
     <div className='w-[300px] h-[300px] overflow-y-auto overflow-x-hidden '>
      {data?.data?.modules?.map(module=><div key={module?._id} className='w-[300px] h-[60px] mt-2  items-center shadow-sm rounded-md shadow-zinc-200 bg-slate-100 dark:bgzin bg-opacity-30  flex p-2'>
        <p>{module?.lesson?.name}</p>
      </div>)}
      <div className='w-[300px] h-[60px] mt-2  items-center  rounded-md    flex p-2'>
        <p className=' font-bold text-[18px]'>By</p>
        <img src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} className='w-[40px] h-[40px] rounded-full ml-2'/>

        <p className='mx-2 font-bold text-gray-400'>{course?.data?.createdBy.fullName}</p>
      </div>
      <div className=' mt-4'>
        <div className='flex flex-row items-center justify-center'>
          <p className='font-bold mx-5 text-[18px]'>Price</p>
          <p>{course?.data?.price||111 }Birr</p>
        </div>
    
     <div onClick={()=>mutation.mutate()} className="flex py-2 flex-row rounded-md px-2 bg-blue-700 w-[200px]">
      <img src={chapaicon} className='w-[40px] h-[40px] rounded-full '/>
     <p className=' h-[40px]  items-center rounded-md  py-3  font-bold  text-white  flex p-2'>Pay With Chapa</p>
   
     </div>
        </div>
    
      
     </div>
     
    
      
      </div> */}
      <div className='flex flex-col px-5 items-center justify-center'>
        <div className='h-[50px] '>
          <p className='text-3xl dark:text-white font-bold'>{course?.data?.name}</p>
        </div>
        <div className="flex w-full h-[50px] my-5 sm:my-0 flex-row items-center justify-start">
         
          <img src={'https://picsum.photos/200'} className='w-[40px] h-[40px] rounded-full'/>
          <p className='mx-2 text-[17px] text-gray-800 dark:text-white font-bold'>{course?.data?.createdBy.fullName}</p>
        </div>
        <div className='sm:w-[400px] w-full overflow-y-auto overflow-x-hidden '>
          <p className=' mx-3 font-bold  dark:text-white text-slate-900 line-clamp-3'>{course?.data?.description}</p></div>
          <div className=' w-full flex flex-row items-center'>
            
            <div className='   my-4 flex items-center justify-center w-[100px] h-[50px]'>
          <p className='text-xl text-black dark:text-white font-bold'>{course?.data?.price||100} Birr</p>
        
            </div>
            
            <div onClick={()=>mutation.mutate()} className='w-[270px] flex  flex-row items-center  justify-center  text-white h-[50px]  rounded-r-md  cursor-pointer hover:border-lime-800 border-zinc-200 dark:border-zinc-900 border-l-2  border-r-2 border-t-2 border-b-2'>
            
              <p className='text-xl font-bold text-zinc-900  dark:text-white  mx-2'>Pay With </p>
              
              
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 167 63" xml:space="preserve" width="100"><path fill="#8dc63f" opacity="0.59" enable-background="new" d="M11.8,26.2h23.5l0,0l0,0c0,3.6-2.9,6.5-6.5,6.5c0,0,0,0,0,0h-17c-1.8,0-3.3-1.5-3.3-3.3l0,0l0,0
                                C8.6,27.7,10,26.2,11.8,26.2L11.8,26.2L11.8,26.2z"></path><path fill="#8dc63f" opacity="0.59" enable-background="new" d="M35.1,17.6l-4.7,6.5h6.2c3.6,0,6.5-2.9,6.5-6.5c0,0,0,0,0,0H35.1z"></path><path fill="#8dc63f" opacity="0.59" enable-background="new" d="M22.4,24l4.6-6.4H11.9C16.3,17.6,20.4,20.1,22.4,24z"></path><path fill="#7dc400" d="M22.4,24.1l0-0.1l-0.1,0.1H22.4z"></path><path fill="#7dc400" d="M27.2,17.4L27,17.6L22.4,24l0,0.1h-0.1l-1.5,2.1l-4.9,6.7c-1.9,2.2-5.3,2.5-7.5,0.6S5.9,28.2,7.8,26
                                c1-1.1,2.4-1.8,3.9-1.9h10.7l0.1-0.1c-2-3.9-6.1-6.4-10.5-6.4l0,0h-0.7C4.6,18-0.4,23.6,0,30.1s6,11.5,12.5,11.1
                                c3.4-0.2,6.6-1.9,8.6-4.5l0.4-0.6l0,0l7.2-9.9l1.5-2.1l4.7-6.5l1.2-1.6C33.4,13.9,29.3,14.5,27.2,17.4z"></path><path fill="#7dc400" d="M81.3,21.5v2.4c0.6-0.6,1.2-1,2-1.3c0.8-0.3,1.7-0.5,2.5-0.5c4.6,0,6.9,2.7,6.9,8.1v11l0,0
                                c-3.1,0-5.7-2.6-5.7-5.7v-4.9c0.1-0.9-0.2-1.8-0.8-2.5c-0.6-0.6-1.3-0.9-2.1-0.8c-0.8,0-1.5,0.3-2.1,0.8c-0.6,0.7-0.8,1.6-0.8,2.5
                                v10.6l0,0c-3.2,0-5.7-2.5-5.7-5.7c0,0,0,0,0,0V15.8l0,0C78.7,15.7,81.3,18.3,81.3,21.5C81.3,21.5,81.3,21.5,81.3,21.5z"></path><path fill="#7dc400" d="M116.1,31.9c0-1.8,0.5-3.5,1.5-4.9c1-1.5,2.3-2.7,3.9-3.5c2.8-1.5,6.2-1.7,9.2-0.6c1.3,0.5,2.4,1.2,3.4,2.1
                                c1,0.9,1.8,2,2.3,3.1c0.6,1.2,0.8,2.6,0.8,3.9c0,1.3-0.3,2.7-0.9,3.9c-0.5,1.2-1.3,2.3-2.3,3.1c-1,0.9-2.1,1.6-3.4,2.1
                                c-2.6,0.9-5.4,0.9-7.9,0l-0.4-0.2l-0.4-0.2v7.6l0,0c-3.2,0-5.7-2.6-5.7-5.7L116.1,31.9z M121.8,32c0,0.8,0.2,1.6,0.7,2.3
                                c0.4,0.7,1,1.3,1.8,1.7c0.7,0.4,1.5,0.6,2.3,0.6c0.8,0,1.7-0.2,2.4-0.6c0.7-0.4,1.3-1,1.8-1.7c0.4-0.7,0.7-1.5,0.7-2.3
                                c0-1.3-0.5-2.5-1.4-3.3c-1.9-1.8-4.9-1.8-6.7,0C122.4,29.6,121.8,30.7,121.8,32L121.8,32z"></path><path fill="#7dc400" d="M148.6,22.1c-5.4,0-9.8,4.4-9.8,9.8s4.4,9.8,9.8,9.8c2.1,0,4.1-0.7,5.8-1.9c1,1.2,2.4,1.9,4,1.9v-9.8
                                C158.4,26.5,154,22.1,148.6,22.1z M148.6,36.6c-2.6,0-4.6-2.1-4.6-4.7c0-2.6,2.1-4.6,4.7-4.6c2.6,0,4.6,2.1,4.6,4.7c0,0,0,0,0,0
                                C153.2,34.5,151.1,36.6,148.6,36.6C148.6,36.6,148.6,36.6,148.6,36.6z"></path><path fill="#7dc400" d="M104.4,22.1c-5.4,0-9.8,4.4-9.8,9.8c0,5.4,4.4,9.8,9.8,9.8c2.1,0,4.1-0.7,5.8-1.9c1,1.2,2.4,1.9,4,1.9v-9.8
                                C114.2,26.5,109.8,22.1,104.4,22.1z M104.4,36.6c-2.6,0-4.7-2.1-4.7-4.6s2.1-4.7,4.6-4.7c2.6,0,4.7,2.1,4.7,4.6c0,0,0,0,0,0
                                C109,34.5,107,36.6,104.4,36.6z"></path><path fill="#7dc400" d="M64.7,35.8c-3.9,0-7-3.2-7-7c0-3.9,3.2-7,7-7c1.9,0,3.6,0.8,4.9,2.1l4.1-4c-4.9-5-13-5.1-18-0.2s-5.1,13-0.2,18
                                s13,5.1,18,0.2c0,0,0.1-0.1,0.1-0.1l-4-4C68.4,35.1,66.6,35.8,64.7,35.8z"></path></svg>
              <AiOutlineArrowRight size={30} color='green'/>
            </div>
       
      </div>
      </div>
      
    
    </div>
    
    
  )
}
