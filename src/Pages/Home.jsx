import React, { useState } from 'react'

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
import UseFetchCourse from '../Hooks/UseFetchCourse';
import { Bars } from 'react-loader-spinner'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  const authUser = useAuthUser()
  const [searchparams,setSearchParams]=useState(null)
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
      
      const {data:searchdata,isLoading:searchisLoading}=UseFetchCourse(searchparams)
      if(isLoading){
        return <Loading/>
      }
      if(isError){
       return <ErrorPage error={error.response?.data}/>
      }
  if(data?.data){

  return (
 
 <>
 <div className="w-[60%]  bg-gray-50 dark:bg-zinc-900 mb-5 ml-[20.0%]  pt-4 justify-center items-center  flex-nowrap  flex flex-col    ">
  <div className='w-[90%] h-[50px] flex-none  relative'>

    <input onChange={(e)=>setSearchParams(e.target.value)} className='w-full h-full border-2 dark:text-white dark:outline-black dark:border-zinc-800 dark:bg-zinc-900 rounded-[12px]' placeholder='search your fav course here'/>
   <div className='w-[50px] flex items-center justify-center h-[50px]   absolute top-0 right-0'>  <IoSearch size={20} className=''/></div>
   {searchparams &&  <div className='w-full  flex flex-col py-[20px] px-2 h-[200px] shadow-md items-center   absolute  mt-2 dark:shadow-gray-500  dark:shadow-sm end-0 right-0 bg-white  dark:bg-zinc-900'>
  {
    searchdata?.data?.length==0&&<p className='text-center  text-gray-400'>No Course Found</p>
  }
    
    <div className='w-full  flex-col h-[135px] shadow-sm flex '>
   
     {searchdata?.data?.map((item)=>{
      return <div className='w-full  h-[65px] mt-2 shadow-sm flex flex-row'>
        <img src={"https://picsum.photos/300/130"} className='w-[65px] h-[65px] object-cover rounded-md'/>
        <div className='w-full ml-4   h-full flex flex-col'>
        <p className='  text-[18px] text-white font-bold'>{item?.name}</p>
        <p className='text-gray-500  text-[15px]'>{item?.modules?.length} Modules Available.</p>
        </div>
            </div>
    })}
    </div>
    
      {true &&  <Bars height={30}/>}

   </div>
}
  </div>
  
  <div className='w-[90%] h-[180px] mt-[16px] flex-nowrap rounded-lg  p-3 bg-gradient-to-r from-amber-200 to-yellow-500'>
    <p className=' text-white'>Online Course</p>
    <p className=' text-3xl text-black font-j font-bold w-2/3'>Sharpen your skills with Proffsional online courses</p>

    <Link  to={"/EnrolledCourse"} className='w-[120px] hover:bg-gray-600  cursor-pointer h-[50px] flex items-center justify-center bg-black rounded-full'>
      <p className=' text-white font-bold'>Explore Now</p>
    </Link >
  </div>
  <div className='w-full flex flex-row h-[60px] flex-nowarp justify-evenly  mt-[18px]'> <div className='w-[200px] rounded-lg shadow-md h-full bg-white dark:bg-zinc-800 flex  items-center  flex-row'>
      <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-purple-800'>
        <img src={"https://picsum.photos/300/130"} className='w-[50px] h-[50px] object-cover rounded-[10px]'/>
      </div>

      <div className='ml-2'>
        <p className=' text-gray-500   dark:text-white text-[14px]'>Graphics</p>
        <p className='text-sm dark:text-zinc-500'>5 Online Courses</p>
      </div>
      <div>
    
        <TbDots size={25} className=' transform  rotate-90'/>
      </div>

    </div>
    <div className='w-[200px] rounded-lg shadow-md h-full bg-white dark:bg-zinc-800 flex  items-center  flex-row'>
      <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-purple-800'>
        <img src={"https://picsum.photos/300/130"} className='w-[50px] h-[50px] object-cover rounded-[10px]'/>
      </div>

      <div className='ml-2'>
        <p className=' text-gray-500   dark:text-white text-[14px]'>Mathimatics</p>
        <p className='text-sm dark:text-zinc-500'>5 Online Courses</p>
      </div>
      <div>
    
        <TbDots size={25} className=' transform  rotate-90'/>
      </div>

    </div>
    <div className='w-[200px] rounded-lg shadow-md h-full bg-white dark:bg-zinc-800 flex  items-center  flex-row'>
      <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-purple-800'>
        <img src={"https://picsum.photos/300/130"} className='w-[50px] h-[50px] object-cover rounded-[10px]'/>
      </div>

      <div className='ml-2'>
        <p className=' text-gray-500   dark:text-white text-[14px]'>Physics</p>
        <p className='text-sm dark:text-zinc-500'>5 Online Courses</p>
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
    <div className='min-w-full pl-2  flex flex-row  relative'>
      <div className='absolute bg-opacity-50  flex items-center justify-center shadow-sm shadow-zinc-600 backdrop:blur-md bg-white rounded-full z-20 top-[55px] left-0 w-[50px] h-[50px] bg-gray-[50px]'>
      <FaAngleDoubleLeft/>
      </div>
      <div className='absolute bg-opacity-50  shadow-sm shadow-zinc-600 backdrop:blur-md bg-white rounded-full z-20 top-[55px] right-0 w-[50px] h-[50px] flex items-center justify-center bg-gray-[50px]'>
        <FaAngleDoubleRight/>
      </div>
      {
        data?.data?.map((data)=>{
          return <CourseCard key={data?._id} data={data} id={data?._id}/>
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
  <div className='w-[90%] flex flex-col  h-[300px] bg-white  dark:bg-zinc-900 shadow-sm  dark:shadow-gray-800 shadow-gray-100  flex-nowrap  mt-[4px]'>

<div className='w-full my-2 h-[50px] px-2 flex  dark:text-white  flex-row  items-center justify-between'>
  <div className='flex flex-row items-center'>
  <img src='https://picsum.photos/300/130' className='w-[50px] h-[50px] rounded-full'/>
  <p className='text-[14px] mx-2 font-bold'>Capt Belihu  </p>
  </div>

  <p className='text-sm'>.Online</p>
  <p className=' text-[15px]'>Online Courses1</p>
  <div className='flex flex-row items-center justify-center'>
<div className='w-[100px] h-[40px] flex items-center justify-center rounded-full  dark:bg-zinc-800'>
  <p className='text-blue-400  text-sm'>Show more</p>
</div>
  </div>
  </div>
  <div className='w-full my-2 h-[50px] px-2 flex  dark:text-white  flex-row  items-center justify-between'>
  <div className='flex flex-row items-center'>
  <img src='https://picsum.photos/300/130' className='w-[50px] h-[50px] rounded-full'/>
  <p className=' text-[14px] mx-2 font-bold'>Capt Belihu  </p>
  </div>

  <p className='text-sm'>.Online</p>
  <p className=' text-[15px]'>Online Courses1</p>
  <div className='flex flex-row items-center justify-center'>
<div className='w-[100px] h-[40px] flex items-center justify-center rounded-full  dark:bg-zinc-800'>
  <p className='text-blue-400  text-sm'>Show more</p>
</div>
  </div>
  </div>

  </div>
 
  
 </div>
 <div className="w-[20%] pr-4 z-20 fixed right-0 h-screen  p-2 bg-white dark:bg-zinc-950 shadow-sm dark:shadow-gray-700 shadow-gray-200">
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
 <p className='text-purple-800 text-[20px] flex  justify-center items-center font-semibold  w-full' >{authUser.name}</p>
 <p className='text-sm dark:text-zinc-500 text-gray-400 flex-row flex items-center'><MdEmail/>{authUser.email}</p>

 </div>
 <p className=' text-sm dark:text-zinc-500 text-center text-gray-400'>continue Your journey And Achieve your goals</p>
 </div>
 </div>
 <div className='w-full mt-[10px] flex flex-row items-center justify-center h-[260px] '>
  
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
