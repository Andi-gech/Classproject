import React, { useEffect, useState } from 'react'

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
import { Bars } from 'react-loader-spinner'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseFetchCatagories from '../Hooks/UseFetchCatagories';

import UseFetchAllCourses from '../Hooks/UseFetchAllCourses';

import UseFetchAllEnrolles from '../Hooks/UseFetchAllEnrolles';
import { AiFillStar,AiOutlineUser } from 'react-icons/ai';

function Home() {
  const authUser = useAuthUser()
  const [searchparams,setSearchParams]=useState(null)
  const [selecetedCatagory,setSelecetedCatagory]=useState()
    const generateGraph = () => {
        const graphs = []
        for (let i = 0; i < 7; i++) {
          const percent = Math.floor(Math.random() * 101)
          graphs.push(<VerticalProgressBar key={i} keys={i} percent={percent} />)
        }
        return graphs
      }
      const graphList = generateGraph()


      const {data,isLoading,isError,error}=UseFetchAllEnrolles()
      const {data:catagory}=UseFetchCatagories()
     
      
      const {data:searchdata,isLoading:searchisLoading,refetch}=UseFetchAllCourses(searchparams,selecetedCatagory)
      useEffect(() => {
        console.log(selecetedCatagory)
        refetch()
        
      }, [selecetedCatagory,searchparams])
      if(isLoading){
        return <Loading/>
      }
      if(isError){
       return <ErrorPage error={error.response?.data}/>
      }
  if(data?.data){

  return (
 
 <div className='sm:ml-[20%] flex relative sm:w-[80%] w-full'>
 <div className="sm:w-[70%] w-full   bg-white dark:bg-zinc-900 mb-5   pt-4 justify-center items-center  flex-nowrap  flex flex-col    ">
  <div className='w-[90%] h-[50px] flex-none  relative'>

    <input onChange={(e)=>setSearchParams(e.target.value)} className='w-full h-full border-[0.2px]  dark:text-white  dark:outline-black dark:border-zinc-800 dark:bg-zinc-900 rounded-[10px]' placeholder='search your fav course here'/>
   <div className='w-[50px] flex items-center justify-center h-[50px]   absolute top-0 right-0'>  <IoSearch size={20} className=''/></div>
   {searchparams &&  <div className='w-full  z-40 flex flex-col py-[20px] px-2 h-[200px] shadow-md items-center   absolute  mt-2 dark:shadow-gray-500  dark:shadow-sm end-0 right-0 bg-white  dark:bg-zinc-900'>
  {
    searchdata?.data?.length==0&&<p className='text-center  text-gray-400'>No Course Found</p>
  }
    
    <div className='w-full  flex-col h-[135px] shadow-sm flex '>
   
     {searchdata?.data?.map((item)=>{
      return <div className='w-full  h-[65px] mt-2 shadow-sm flex flex-row'>
        <img src={`http://localhost:8080/images/${item?.image}`} className='w-[65px] h-[65px] object-cover rounded-md'/>
        
        <div className='w-full ml-4   h-full flex flex-col'>
        <p className='  text-[18px] dark:text-white text-black font-bold'>{item?.name}</p>
        <p className='text-gray-500  text-[15px]'>{item?.modules?.length} Modules Available.</p>
        </div>
            </div>
    })}
    </div>
    
      {true &&  <Bars height={30}/>}
      

   </div>
   
}
  </div>
  
  <div style={{
    backgroundImage: images,
  }} className=' relative w-[90%] h-[180px] mt-[16px] flex-nowrap  overflow-hidden rounded-lg  p-3 bg-gradient-to-r from-blue-200 to-blue-500'>
    <p className=' text-white'>Online Course</p>
    <p className=' sm:text-3xl text-black font-j font-bold w-2/3'>Sharpen your skills with professional online courses</p>

    <Link  to={"/EnrolledCourse"} className='w-[120px] hover:bg-gray-600  cursor-pointer h-[50px] flex items-center justify-center bg-black rounded-md'>
      <p className=' text-white font-bold'>Explore Now</p>
    </Link >
 
  </div>
  <div className='w-full flex flex-row h-[60px] flex-nowarp  px-[50px] mt-[18px]'> 
  {catagory?.data?.map((item)=>{
  return  <div onClick={()=>setSelecetedCatagory(item?._id)} className='w-[250px] mx-[10px] rounded-lg shadow-md h-full bg-white dark:bg-zinc-800 flex  items-center  justify-between px-3 flex-row'>
      <div className='w-[50px] h-[50px] rounded-full flex items-center justify-center bg-purple-800'>
        <img src={`http://localhost:8080/images/${item?.image}`} className='w-[50px] h-[50px] object-cover rounded-[10px]'/>
      </div>

      <div className='ml-2'>
        <p className=' text-gray-500   dark:text-white text-[14px]'>{item?.name}</p>
        <p className='text-sm dark:text-zinc-500'>5 Online Courses</p>
      </div>
      <div>
    
        <TbDots size={25} className=' transform  rotate-90'/>
      </div>

    </div>
  })}
  
   
  </div>
  
  <div className='w-[90%] flex flex-row h-[40px]   items-center   px-2 my-[30px] border-l-[6px] dark:shadow-gray-900 py-2    shadow-sm shadow-gray-100 border-blue-700 '>
    <p className=' text-[18px] dark:text-white  font-semibold text-black'>Continue watching</p>
  </div>
 
  <div className='w-[90%] flex flex-row   overflow-hidden '>
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
        data?.data?.length===0&& <p className='  bg-opacity-50 text-[20px]  flex items-center justify-center h-[150px] w-[90%]  text-gray-400 flex-row'>
          <BiErrorCircle/> &nbsp;No Course Found</p>
      }
 
    </div>
  
  


  </div>
  <div className='w-[90%] flex flex-row h-[40px] shadow-sm shadow-gray-200  items-center dark:shadow-gray-900 py-2    px-2 my-[30px] border-l-[6px]  border-blue-700 '>
    <p className=' text-[18px] dark:text-white  font-semibold text-black'>Your Mentors</p>
  </div>
  <div className='w-[90%] flex flex-col  h-[300px]   shadow-sm    flex-nowrap  mt-[4px]'>

<div className='w-full my-2 h-[60px] px-2 flex dark:border-gray-900 py-2   border-b-2 dark:text-white  flex-row  items-center justify-between'>
  <div className='flex flex-row items-center'>
  <AiOutlineUser className='w-[50px] h-[50px] bg-gray-200  text-black dark:bg-zinc-800   dark:text-white rounded-full'/>

 
<p className='text-[14px] mx-2 font-bold'>Teacher </p>
  </div>

<div className='flex flex-row'>
  <AiFillStar size={13} color='orange'/>
  <AiFillStar size={13} color='orange'/>
  <AiFillStar size={13} color='orange'/>
  <AiFillStar size={13} color='orange'/>
  <AiFillStar size={13}/>
  <p className='text-[10px]'>(4.0)</p>
 
</div>
  <p className=' text-[15px] sm:flex hidden'>Web Development</p>
  <div className='flex flex-row items-center justify-center'>
<div className='w-[100px] h-[40px] flex items-center justify-center rounded-full  dark:bg-zinc-800'>
  <p className='text-blue-400  text-sm'>Show more</p>
</div>
  </div>
  </div>
  <div className='w-full my-2 h-[60px] px-2 flex dark:border-gray-900 py-2  border-b-2 dark:text-white  flex-row  items-center justify-between'>
  <div className='flex flex-row items-center'>
    <AiOutlineUser className='w-[50px] h-[50px] bg-gray-200  text-black dark:bg-zinc-800   dark:text-white rounded-full'/>

  <p className='text-[14px] mx-2 font-bold'>Teacher </p>
  </div>

<div className='flex flex-row'>
  <AiFillStar size={13} color='orange'/>
  <AiFillStar size={13} color='orange'/>
  <AiFillStar size={13} color='orange'/>
  <AiFillStar size={13} color='orange'/>
  <AiFillStar size={13}/>
  <p className='text-[10px]'>(4.0)</p>
 
</div>
  <p className=' text-[15px] sm:flex hidden'>Web Development</p>
  <div className='flex flex-row items-center justify-center'>
<div className='w-[100px] h-[30px] flex items-center justify-center rounded-full  dark:bg-zinc-800'>
  <p className='text-blue-400  text-sm'>Show more</p>
</div>
  </div>
  </div>
  </div>
 
  
 </div>
 <div className="w-[20%] pr-4 z-20 sm:flex flex-col hidden fixed  right-0 h-screen  p-2 bg-white dark:bg-zinc-900 shadow-sm dark:shadow-gray-700 shadow-gray-200">
 <div className="w-full h-[50px] flex flex-row items-center justify-between ">
   <p className="text-black dark:text-white font-bold ">Your Profile</p>
   <TbDots size={25} className=' transform  rotate-90'/>


 </div>
 <div className='w-full mt-[20px]  flex flex-col items-center justify-center'>
 <div className='w-[100px] h-[100px]'>
   
   <AiOutlineUser size={25} className='w-full bg-gray-100  text-black dark:bg-zinc-800 border-2  border-purple-500 dark:text-white rounded-full h-[100px]'/>
 </div>
 <div className='  w-[80%]'>
 <div className='w-full flex flex-col items-center mt-[10px] justify-center dark:text-white '>
 <p className='  text-[18px] font-bold'>Well Come Back</p>
 <p className='text-gray-500 text-[18x] flex  justify-center items-center  font-semibold  w-full' >@{authUser.name}</p>
 <p className='text-sm dark:text-zinc-500 text-gray-400 flex-row flex mt-1 items-center'><MdEmail/>{authUser.email}</p>

 </div>
 <p className=' text-sm dark:text-zinc-500 mt-2 text-center text-gray-700'>continue Your journey And Achieve your goals</p>
 </div>
 </div>
 
 

</div>
</div>

  )
}
}

export default Home
