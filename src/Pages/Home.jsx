import React from 'react'

import { IoIosNotificationsOutline } from "react-icons/io";

import { IoSearch } from 'react-icons/io5';
import { TbDots } from 'react-icons/tb';
import CourseCard from '../Components/CourseCard';



import VerticalProgressBar from '../Components/VerticalProgressBar';
import Loading from './Loading';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { MdEmail } from 'react-icons/md';
import UseFetchAllCourse from '../Hooks/UseFetchAllCourse';
import ErrorPage from './ErrorPage';
import { BiErrorCircle } from 'react-icons/bi';

function Home() {
  const authUser = useAuthUser()
    const generateGraph = () => {
        const graphs = []
        for (let i = 0; i < 7; i++) {
          const percent = Math.floor(Math.random() * 101)
          graphs.push(<VerticalProgressBar key={i} keys={i} percent={percent} />)
        }
        return graphs
      }
      const graphList = generateGraph()

      const {isLoading,data,isError,error}=UseFetchAllCourse()
      if(isLoading){
        return <Loading/>
      }
      if(isError){
       return <ErrorPage error={error.response.data}/>
      }
  if(data?.data){

  return (
 
 <>
 <div className="w-[55%]  mb-5 ml-[20.5%]  justify-center items-center  flex-nowrap  flex flex-col p-2   ">
  <div className='w-[90%] h-[50px] flex-none  relative'>
    <input className='w-full h-full border-2 dark:text-white dark:outline-black dark:border-zinc-800 dark:bg-zinc-900 rounded-[12px]' placeholder='search your fav course here'/>
   <div className='w-[50px] flex items-center justify-center h-[50px]   absolute top-0 right-0'>  <IoSearch size={20} className=''/></div>
  </div>
  <div className='w-[90%] h-[180px] mt-[16px] flex-nowrap rounded-md  p-3 bg-purple-600'>
    <p className=' text-white'>Online Course</p>
    <p className='text-white text-3xl font-bold w-2/3'>Sharpen your skills with Proffsional online courses</p>

    <div className='w-[100px] h-[50px] flex items-center justify-center bg-black rounded-full'>
      <p className=' text-white font-bold'>Join Now</p>
    </div>
  </div>
  <div className='w-full flex flex-row h-[60px] flex-nowarp justify-evenly  mt-[18px]'>
    <div className='w-[200px] rounded-lg shadow-md h-full bg-white dark:bg-zinc-800 flex  items-center  flex-row'>
      <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-purple-800'>
        <IoIosNotificationsOutline  color='white' size={30}/>
      </div>

      <div className='ml-2'>
        <p className=' text-gray-500   dark:text-white text-[14px]'>2/8 Watched</p>
        <p className='text-sm dark:text-zinc-500'>Online Courses1</p>
      </div>
      <div>
    
        <TbDots size={25} className=' transform  rotate-90'/>
      </div>

    </div>
    <div className='w-[200px] rounded-lg shadow-md h-full bg-white dark:bg-zinc-800 flex  items-center  flex-row'>
      <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-purple-800'>
        <IoIosNotificationsOutline  color='white' size={30}/>
      </div>

      <div className='ml-2'>
        <p className=' text-gray-500   dark:text-white text-[14px]'>2/8 Watched</p>
        <p className='text-sm dark:text-zinc-500'>Online Courses1</p>
      </div>
      <div>
    
        <TbDots size={25} className=' transform  rotate-90'/>
      </div>

    </div>

    <div className='w-[200px] rounded-lg shadow-md h-full bg-white dark:bg-zinc-800 flex  items-center  flex-row'>
      <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-purple-800'>
        <IoIosNotificationsOutline  color='white' size={30}/>
      </div>

      <div className='ml-2'>
        <p className=' text-gray-500   dark:text-white text-[14px]'>2/8 Watched</p>
        <p className='text-sm dark:text-zinc-500'>Online Courses1</p>
      </div>
      <div>
    
        <TbDots size={25} className=' transform  rotate-90'/>
      </div>

    </div>
  </div>
  <div className='w-[90%] flex flex-row h-[60px]  flex-nowrap  mt-[18px]'>
    <p className='  dark:text-white text-[20px] '>Continue Watching</p>
  </div>
 
  <div className='w-[90%] flex flex-row   overflow-hidden  mt-[18px]'>
    <div className='min-w-full flex flex-row '>
      {
        data?.data?.map((data)=>{
          return <CourseCard key={data?.id} id={data?.id}/>
        })
      }
    
      {
        data?.data?.length===0&& <p className=' bg-slate-50 dark:bg-zinc-950 bg-opacity-50 text-[20px]  flex items-center justify-center h-[150px] w-[90%]  text-gray-400 flex-row'>
          <BiErrorCircle/> &nbsp;No Course Found</p>
      }
 
    </div>
  
    Settings


  </div>
  <div className='w-[90%] flex flex-row h-[60px]   items-center   '>
    <p className=' text-[20px] dark:text-white text-black'>Your Mentors</p>
  </div>
  <div className='w-[90%] flex flex-col h-[300px] bg-white  dark:bg-zinc-900 shadow-md  dark:shadow-gray-800 shadow-gray-300  flex-nowrap  mt-[18px]'>
<div className='w-full dark:text-white h-[50px] px-2 flex  flex-row  items-center justify-between'>
  <p>Instructor Name</p>
  <p>Course Type</p>
  <p>Course Title</p>
  <p>Actions</p>


</div>
<div className='w-full my-2 h-[50px] px-2 flex  dark:text-white  flex-row  items-center justify-between'>
  <div className='flex flex-row items-center'>
  <img src='https://picsum.photos/300/130' className='w-[50px] h-[50px] rounded-full'/>
  <p>Capt Belihu  </p>
  </div>

  <p>Online</p>
  <p>Online Courses1</p>
  <div className='flex flex-row items-center justify-center'>
<div className='w-[100px] h-[40px] flex items-center justify-center rounded-full bg-purple-200 dark:bg-zinc-800'>
  <p className='text-blue-800'>Show more</p>
</div>
  </div>
  </div>

  <div className='w-full my-2 h-[50px] px-2 flex  flex-row  dark:text-white items-center justify-between'>
  <div className='flex flex-row items-center'>
  <img src='https://picsum.photos/300/130' className='w-[50px] h-[50px] rounded-full'/>
  <p>Capt Belihu  </p>
  </div>

  <p>Online</p>
  <p>Online Courses1</p>
  <div className='flex flex-row items-center justify-center'>
<div className='w-[100px] h-[40px] flex items-center justify-center rounded-full bg-purple-200 dark:bg-zinc-800'>
  <p className='text-blue-800'>Show more</p>
</div>
  </div>
  </div>

<div className='w-full my-2 h-[50px] px-2 flex  flex-row  dark:text-white items-center justify-between'>
  <div className='flex flex-row items-center'>
  <img src='https://picsum.photos/300/130' className='w-[50px] h-[50px] rounded-full'/>
  <p>Capt Belihu  </p>
  </div>

  <p>Online</p>
  <p>Online Courses1</p>
  <div className='flex flex-row items-center justify-center'>
<div className='w-[100px] h-[40px] flex items-center justify-center rounded-full bg-purple-200 dark:bg-zinc-800'>
  <p className='text-blue-800'>Show more</p>
</div>
  </div>
  </div>
  </div>
 
  
 </div>
 <div className="w-[25%] z-20 fixed right-0 h-screen  p-2 bg-white dark:bg-zinc-800 shadow-lg dark:shadow-gray-700 shadow-gray-300">
 <div className="w-full h-[50px] flex flex-row items-center justify-between ">
   <p className="text-black dark:text-white ">Your Profile</p>
   <TbDots size={25} className=' transform  rotate-90'/>


 </div>
 <div className='w-full mt-[20px]  flex flex-col items-center justify-center'>
 <div className='w-[100px] h-[100px]'>
   
   <img src='https://picsum.photos/300/130' className='w-full  rounded-full h-[100px]'/>
 </div>
 <div className='  w-[80%]'>
 <div className='w-full flex flex-col items-center mt-[10px] justify-center dark:text-white '>
 <p className='  text-[18px] font-bold'>Well Come Back</p>
 <p className='text-purple-800 text-[20px] font-semibold ml-2 w-[210px]' >{authUser.name}</p>
 <p className='text-sm dark:text-zinc-500 text-gray-400 flex-row flex items-center'><MdEmail/>{authUser.email}</p>

 </div>
 <p className=' text-sm dark:text-zinc-500 text-center text-gray-400'>continue Your journey And Achieve your goals</p>
 </div>
 </div>
 <div className='w-full mt-[20px] flex flex-row items-center justify-center h-[260px] dark:bg-zinc-800 bg-gray-100'>
  
{
 graphList
}

 </div>
 

</div>
</>

  )
}
}

export default Home
