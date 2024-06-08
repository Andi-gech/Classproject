import React from 'react'
import logo from '../assets/Untitled.png'
import { AiFillStar, AiOutlineHome ,AiOutlineTrophy} from "react-icons/ai";
import { IoIosNotificationsOutline ,IoMdSettings,IoMdOpen} from "react-icons/io";
import { TiBook } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import Switcher from '../Components/Switch';
import image from '../assets/curvestyle.png'
export default function Header() {
    const signOut = useSignOut();
    const navigate = useNavigate();
  return (
    
    <div className='  w-[18%] sm:flex fixed hidden left-0  h-screen rounded-md  bg-white  dark:text-white dark:bg-zinc-900  flex-col items-center dark:shadow-gray-600 shadow-gray-300  shadow-sm  z-10'>
    <image className=' z-20 absolute bottom-0' src={image}/>
    <div className=' h-[90px] w-full px-2 flex flex-row items-center justify-between  '>
    <img src={logo} className='w-[50px]   h-[50px]'/>
    <div className=' ml-2  h-full flex flex-col items-start justify-center'>
    <p className=' font-bold text-xl   text-orange-500 dark:text-white  font-serif '>Dec Online</p>
    <p className='  text-[12px] font-normal '>Online Education Service</p>
    </div>
    <Switcher/>
    </div>
    <div className='w-full h-[90%] flex flex-col justify-between'>
      <div className='w-full flex-col'>
      <div className='w-full my-[10px]   flex items-center  justify-start px-[40px]'>
      <p className='   text-[14px]  dark:text-white text-gray-400   '>OVERVIEW</p>
      </div>
    
      
      <Link  to='/' className='w-full  mt-2  hover:text-blue-800  cursor-pointer text-center ml-[40px] h-[30px]    font-light text-[15px]  flex-row flex items-center '>
  <AiOutlineHome size={20}  className=' dark:text-white text-black '  /> <p className='ml-2  dark:text-white  font-normal text-black   '>Dashboard</p>   </Link >
      <Link   to={'/Notification'} className='w-full  mt-2  hover:text-blue-800  cursor-pointer text-center ml-[40px] h-[30px]  font-light text-[15px] flex items-center '>
     <IoIosNotificationsOutline size={20} className=' dark:text-white text-black ' /> <p className='ml-2  dark:text-white font-normal text-black '>Notification</p>   </Link  >
      <Link  to={'/EnrolledCourse'} className='w-full  mt-2 hover:text-blue-800  cursor-pointer  text-center ml-[40px] h-[30px]  font-light text-[15px] flex items-center '>
    <TiBook size={20} className=' dark:text-white text-black ' />  <p className='ml-2  dark:text-white text-black font-normal '>Lesson</p>   </Link>  
      <Link to={'/Achievment'} className='w-full  mt-2 hover:text-blue-800  cursor-pointer  text-center ml-[40px] h-[30px]  font-light text-[15px] flex items-center '>
    <AiOutlineTrophy size={20} className=' dark:text-white text-black ' />  <p  className='ml-2  dark:text-white text-black  font-normal'>Achievment</p> 
      </Link>
      </div>
     
      <div className='flex flex-col'>
      <div className='w-full   ml-[40px] flex items-center '>
      <p className='  dark:text-white text-gray-400   text-[14px]  font-medium '>TOP RATED TEACHERS</p>
      </div>
      <div className='mt-[15px]'>
    
      
      <div className='w-[80%]   px-2 h-[50px]  hover:text-blue-800  cursor-pointer text-center ml-[30px]  shadow-sm     font-light text-[15px]  flex-row flex items-center '>
        <img src='https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000' alt='user' className='h-[30px] w-[30px] rounded-full' /> 
        <div className='flex   w-[170px]  flex-col justify-center  pl-3 items-start'>
          <p className='m-0 p-0 dark:text-white text-black font-normal    text-sm  '>Mr. Smith</p>
          {/* <p className=' font-serif text-[12px]  text-gray-600'>Accountant</p> */}
          <div className='w-full flex flex-row text-sm items-center'>
            <AiFillStar color='orange'/>
            <AiFillStar color='orange'/>
            <AiFillStar color='orange'/>
            <AiFillStar/>
            <AiFillStar/>
            <p className='text-[10px] ml-2'>(5.0)</p>
          </div>
          </div>  
          </div>
          <div className='w-[80%]  mt-3  px-2 h-[50px]  hover:text-blue-800  cursor-pointer text-center ml-[30px]  shadow-sm     font-light text-[15px]  flex-row flex items-center '>
        <img src='https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000' alt='user' className='h-[30px] w-[30px] rounded-full' /> 
        <div className='flex   w-[170px]  flex-col justify-center  pl-3 items-start'>
          <p className='m-0 p-0 dark:text-white text-black font-normal    text-sm  '>Mr. Smith</p>
          {/* <p className=' font-serif text-[12px]  text-gray-600'>Accountant</p> */}
          <div className='w-full flex flex-row text-sm items-center'>
            <AiFillStar color='orange'/>
            <AiFillStar color='orange'/>
            <AiFillStar color='orange'/>
            <AiFillStar/>
            <AiFillStar/>
            <p className='text-[10px] ml-2'>(5.0)</p>
          </div>
          </div>  
          </div>
      </div>
      </div>
  
      <div className='mb-2'>
       
        
       
      <div className='w-full  mt-2  hover:text-blue-800  cursor-pointer text-center ml-[40px] h-[30px]    font-light text-[15px]  flex-row flex items-center '>
  <IoMdSettings size={20} className=' dark:text-white text-black '    /> <p className='ml-2  dark:text-white font-normal text-black   '>Settings</p>   </div>
  <div onClick={()=>{signOut()
  navigate('/login')
}} className='w-full  mt-2  hover:text-blue-800  cursor-pointer text-center ml-[40px] h-[30px]    font-light text-[15px]  flex-row flex items-center '>
  <IoMdOpen size={20} className=' dark:text-white text-black '    /> <p className='ml-2  dark:text-white text-black  font-normal  '>LogOut</p>   </div>
  
      </div>
      
     
  
    </div>
  
  
   </div>
  )
}
