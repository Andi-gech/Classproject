import React, { Suspense, useEffect, useState } from 'react'

import { IoSearch } from 'react-icons/io5';
import { TbDots } from 'react-icons/tb';
import CourseCard from '../Components/CourseCard';



import VerticalProgressBar from '../Components/VerticalProgressBar';
import Loading from './Loading';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { MdEmail } from 'react-icons/md';

import ErrorPage from './ErrorPage';
import { BiErrorCircle } from 'react-icons/bi';
import images from '../assets/im.jpg'
import { Bars, ColorRing } from 'react-loader-spinner'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseFetchCatagories from '../Hooks/UseFetchCatagories';

import UseFetchAllCourses from '../Hooks/UseFetchAllCourses';

import UseFetchAllEnrolles from '../Hooks/UseFetchAllEnrolles';
import { AiFillStar,AiOutlineBars,AiOutlineUser } from 'react-icons/ai';
import UseFetchEachUser from '../Hooks/UseFechEachUser';

const SlideCards=React.lazy(()=>import('../Components/SlideCards'))

export default function Home() {
  const authUser = useAuthUser()
  const [searchparams,setSearchParams]=useState(null)
  const [selecetedCatagory,setSelecetedCatagory]=useState()
  const [loaded,setloaded]=useState(false)
  const { data:userdata, refetch:reftchuser } = UseFetchEachUser(authUser?._id);
  useEffect(() => {
    reftchuser()
  }, [authUser?._id]);
  
  

  const calculateavgrate=(data)=>{
    let sum=0
    data?.forEach((ele)=>{
      sum+=ele.rate
    })
    return (sum/data?.length).toFixed(2)
  }
    const generateGraph = () => {
        const graphs = []
        for (let i = 0; i < 7; i++) {
          const percent = Math.floor(Math.random() * 101)
          graphs.push(<VerticalProgressBar key={i} keys={i} percent={percent} />)
        }
        return graphs
      }
      const graphList = generateGraph()


      let {data,isLoading,isError,error}=UseFetchAllEnrolles()
    
      const {data:catagory}=UseFetchCatagories()
     
      
      const {data:searchdata,isLoading:searchisLoading,refetch}=UseFetchAllCourses(searchparams,selecetedCatagory)
      useEffect(() => {
        console.log(selecetedCatagory)
        refetch()
        
      }, [selecetedCatagory,searchparams])
     
      if(isError){
       return <ErrorPage error={error.response?.data}/>
      }
  
  return (
 
 <div className='sm:ml-[18%] py-[60px] sm:py-[5px] flex relative bg-slate-100 dark:bg-slate-950 sm:w-[82%] w-full'>
 <div className="sm:w-[70%] w-full     mb-5   pt-4 justify-center items-center  flex-nowrap  flex flex-col    ">
  
  <div className='w-[90%] h-[50px] flex-none  relative'>

    <input onChange={(e)=>setSearchParams(e.target.value)} className='w-full h-full border-[0.2px]  dark:text-white  dark:outline-black dark:border-zinc-800 dark:bg-slate-900 rounded-[10px]' placeholder='search your fav course here'/>
   <div className='w-[50px] flex items-center justify-center h-[50px]   absolute top-0 right-0'>  <IoSearch size={20} className=''/></div>
   {searchparams &&  <div className='w-full  z-40 flex flex-col py-[20px] overflow-y-auto px-2 h-[200px] shadow-md items-center   absolute  mt-2 dark:shadow-gray-500  dark:shadow-sm end-0 right-0 bg-white  dark:bg-slate-900'>
  {
    searchdata?.data?.length==0&&<p className='text-center  text-gray-400'>No Course Found</p>
  }
    
    <div className='w-full  flex-col h-[135px] shadow-sm flex '>
   
     {searchdata?.data?.map((item)=>{
      return <div className='w-full  h-[65px] mt-2 shadow-sm flex flex-row'>
        <img src={`http://192.168.1.15:8080/images/${item?.image}`} className='w-[65px] h-[65px] object-cover rounded-md'/>
        
        <div className='w-full ml-4   h-full flex flex-col'>
        <p className='  text-[18px] dark:text-white text-black font-bold'>{item?.name}</p>
        <p className='text-gray-500  text-[15px]'>{item?.modules?.length} Modules Available.</p>
        </div>
            </div>
    })}
    </div>
    
      {searchisLoading &&  <Bars height={30}/>}
      

   </div>
   
}
  </div>
  {(isLoading||searchisLoading) ?

<div role="status" class="flex items-center justify-center h-[180px] mt-5 w-[90%] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>:

  <div style={{
    
   
  }} className=' relative w-[90%] h-[180px]   mt-[16px] flex-nowrap  z-0 overflow-hidden rounded-lg  p-3 '>
    <img src={images}  alt='banner'  loading='lazy' className='w-full h-full object-cover absolute top-0 left-0 -z-10'/>
    
    <p className=' text-white'>Online Course</p>
    <p className=' sm:text-3xl text-white font-j font-bold w-2/3'>Sharpen your skills with professional online courses</p>

    <Link  to={"/EnrolledCourse"} className='w-[120px] hover:bg-gray-600  cursor-pointer h-[50px] flex items-center justify-center bg-slate-900 rounded-md'>
      <p className=' text-white font-bold'>Explore Now</p>
    </Link >
 
  </div>}
  {(isLoading||searchisLoading)?<div className='w-full flex flex-row  h-[60px] flex-nowarp  px-[50px] mt-[18px]'>
  <div className='w-[200px] h-full mx-2 bg-gray-300 dark:bg-gray-700 items-center animate-pulse rounded-md flex flex-row'>
 <svg class="w-[50px] h-[50px] text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
  <div className='flex flex-col' >
  <div className='w-[120px] h-[10px] bg-gray-100 dark:bg-gray-600 animate-pulse rounded-full'></div>
  <div className='w-[80px] h-[10px] mt-3 bg-gray-100 dark:bg-gray-600 animate-pulse rounded-full'></div>
  </div>

  </div>
   <div className='w-[200px] h-full mx-2 bg-gray-300 dark:bg-gray-700 items-center animate-pulse rounded-md flex flex-row'>
 <svg class="w-[50px] h-[50px] text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
  <div className='flex flex-col' >
  <div className='w-[120px] h-[10px] bg-gray-100 dark:bg-gray-600 animate-pulse rounded-full'></div>
  <div className='w-[80px] h-[10px] mt-3 bg-gray-100 dark:bg-gray-600 animate-pulse rounded-full'></div>
  </div>

  </div>
   <div className='w-[200px] h-full mx-2 bg-gray-300 dark:bg-gray-700 items-center animate-pulse rounded-md flex flex-row'>
 <svg class="w-[50px] h-[50px] text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
  <div className='flex flex-col' >
  <div className='w-[120px] h-[10px] bg-gray-100 dark:bg-gray-600 animate-pulse rounded-full'></div>
  <div className='w-[80px] h-[10px] mt-3 bg-gray-100 dark:bg-gray-600 animate-pulse rounded-full'></div>
  </div>

  </div>
  </div>:
  <div className='w-full flex flex-row h-[60px] flex-nowarp overflow-x-auto sm:overflow-x-hidden  overflow-y-hidden  px-[50px] mt-[18px]'> 
  {catagory?.data?.map((item)=>{
  return  <div onClick={()=>setSelecetedCatagory(item?._id)} className='w-[250px] mx-[10px] rounded-lg shadow-md h-full bg-white dark:bg-slate-900 flex  items-center  justify-between px-3 flex-row'>
      <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-gray-200'>
        <img src={ item?.image?`http://192.168.1.15:8080/images/${item?.image}`:'https://cdn-icons-png.flaticon.com/512/149/149071.png'} className='w-[50px] h-[50px] object-cover rounded-[10px]'/>
      </div>

      <div className='ml-2'>
        <p className=' text-gray-500   dark:text-white text-[14px]'>{item?.name}</p>
        <p className='text-sm dark:text-zinc-500'> Online Courses</p>
      </div>
      <div>
    
        <TbDots size={25} className=' transform  rotate-90'/>
      </div>

    </div>
  })}
  
   
  </div>}
  
  <div className='w-[90%] flex flex-row h-[40px]   items-center   px-2 my-[30px] border-l-[6px] dark:shadow-gray-900 py-2    shadow-sm shadow-gray-100 border-blue-700 '>
    <p className=' text-[18px] dark:text-white  font-semibold text-black'>Continue watching</p>
  </div>
 
  <div className='w-[90%] flex flex-row    '>
    <Suspense fallback={<ColorRing
  visible={true}
  height="40"
  width="40"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['blue','blue','blue','blue','blue','blue','blue']}
  />
  }>
   <SlideCards isLoading={(isLoading||searchisLoading)} data={data}/>
   </Suspense>
  
  


  </div>
  <div className='w-[90%] flex flex-row h-[40px] shadow-sm shadow-gray-200  items-center dark:shadow-gray-900 py-2    px-2 my-[30px] border-l-[6px]  border-blue-700 '>
    <p className=' text-[18px] dark:text-white  font-semibold text-black'>Your Mentors</p>
  </div>
  {(isLoading||searchisLoading)?
<div role="status" class="animate-pulse w-full   ">
    <div class="flex items-center justify-start px-[50px] mt-4">
        <svg class="w-[40px] h-[40px] text-gray-300 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div class="w-20 h-3.5 bg-gray-300 rounded-full dark:bg-gray-700 me-3"></div>
        <div class="w-24 h-3 bg-gray-300 rounded-full dark:bg-gray-700"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
:
  <div className='w-[90%] flex flex-col  h-[300px]   shadow-sm    flex-nowrap  mt-[4px]'>
{data?.data?.map((item)=>{
  return(
    <div className='w-full my-2 h-[60px] px-2 flex dark:border-gray-900 py-2   border-b-2 dark:text-white  flex-row  items-center justify-between'>
      <div className='flex flex-row items-center'>
      <img src={item?.course?.createdBy?.profilepic?`http://192.168.1.15:8080/images/${item?.course?.createdBy?.profilepic}`:'https://cdn-icons-png.flaticon.com/512/149/149071.png'} className='w-[50px] h-[50px] rounded-full object-cover'/>
    
     
    <p className='text-[14px] mx-2 font-bold'>{item?.course.createdBy.fullName}</p>
      </div>
    
    <div className='flex flex-row'>
      <AiFillStar size={13} color={calculateavgrate(item?.course?.createdBy?.rating) >= 1 ? 'orange' : 'gray'}/>
      <AiFillStar size={13} color={calculateavgrate(item?.course?.createdBy?.rating) >= 2 ? 'orange' : 'gray'}/>
      <AiFillStar size={13} color={calculateavgrate(item?.course?.createdBy?.rating) >= 3 ? 'orange' : 'gray'}/>
      <AiFillStar size={13} color={calculateavgrate(item?.course?.createdBy?.rating) >= 4 ? 'orange' : 'gray'}/>
      <AiFillStar size={13} color={calculateavgrate(item?.course?.createdBy?.rating) >= 5 ? 'orange' : 'gray'}/>
      <p className='text-[10px]'>({calculateavgrate(item?.course?.createdBy?.rating)})</p>
     
    </div>
      <p className=' text-[15px] sm:flex hidden'>Web Development</p>
      <div className='flex flex-row items-center justify-center'>
    <div className='w-[100px] h-[40px] flex items-center justify-center rounded-full  dark:bg-zinc-800'>
      <p className='text-blue-400  text-sm'>Show more</p>
    </div>
      </div>
      </div>)
})}
  
  </div>
 }
  
 </div>
 <div className="w-[20%] pr-4    bg-white  dark:bg-slate-950 rounded-l-lg z-20 sm:flex flex-col hidden fixed  right-0 h-screen  p-2  shadow-lg dark:shadow-gray-700 shadow-gray-300">
 <div className="w-full h-[50px] flex flex-row items-center justify-between ">
   <p className="text-black dark:text-white font-bold ">Your Profile</p>
   <TbDots size={25} className=' transform  rotate-90'/>


 </div>
 <div className='w-full mt-[20px]  flex flex-col items-center justify-center'>
  {(isLoading||searchisLoading)?<svg class="w-[70px] h-[70px] text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>:<div className='w-[70px] h-[70px]'>
   

   <img src={userdata?.data?.profilepic?`http://192.168.1.15:8080/${userdata?.data?.profilepic}`:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'} className='w-[70px] border-[2px]  border-blue-500  h-[70px] rounded-full' alt='Profile' />
   </div>}

 <div className='  w-[80%]'>
 <div className='w-full flex flex-col items-center mt-[10px] justify-center dark:text-white '>
  {(isLoading||searchisLoading)?<div className="w-[100px] rounded-full animate-pulse h-[15px] bg-gray-300 dark:bg-gray-700"></div>:
   <p className='  text-[18px] font-bold'>Well Come Back</p>}
 
 {(isLoading||searchisLoading)?<div className="w-[70px] rounded-full mt-2  animate-pulse h-[12px] bg-gray-300 dark:bg-gray-700"></div>:
   <p className='text-gray-500 text-[18x] flex  justify-center items-center  font-semibold  w-full' >@{userdata?.data?.fullName}</p>}
 
 {(isLoading||searchisLoading)? <div className="w-full flex flex-row items-center h-[10px] bg-gray-300   dark:bg-gray-700 rounded-full justify-center mt-2"></div>:
  <p className='text-sm dark:text-zinc-500 text-gray-400 flex-row flex mt-1 items-center'><MdEmail/>{userdata?.data?.email}</p>
}

 </div>
 {(isLoading||searchisLoading)? <div className="w-[80%] flex flex-row items-center h-[10px] bg-gray-300   dark:bg-gray-700 rounded-full justify-center mt-2"></div>:
 <p className=' text-sm dark:text-zinc-500 mt-2 text-center text-gray-700'>continue Your journey And Achieve your goals</p>
 }
 </div>
 </div>
 
 

</div>
</div>

  )

}

