import React from 'react'
import logo from '../assets/Untitled.png'
import { AiFillStar, AiOutlineBook, AiOutlineHome ,AiOutlineTrophy} from "react-icons/ai";
import { IoIosNotificationsOutline ,IoMdSettings,IoMdOpen} from "react-icons/io";
import { TiBook } from "react-icons/ti";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import Switcher from '../Components/Switch';
import image from '../assets/curvestyle.png'
import { PiPlus } from 'react-icons/pi';
export default function AdminHeader() {
    const signOut = useSignOut();
    const navigate = useNavigate();

  

  return (
    
    <div className='  w-[18%] sm:flex fixed hidden left-0  h-screen  rounded-r-md  bg-blue-900  text-white   flex-col items-center dark:shadow-gray-600 shadow-gray-300  shadow-md  z-10'>
    <image className=' z-20 absolute bottom-0' src={image}/>
    <div className=' h-[90px] w-full px-2 flex flex-row items-center justify-between  '>
    <img src={logo} className='w-[50px]   h-[50px]'/>
    <div className=' ml-2  h-full flex flex-col items-start justify-center'>
    <p className=' font-bold text-xl    text-white  font-serif '>Dec Online</p>
    <p className='  text-[12px] font-bold '>Online Education Service</p>
    </div>
    <Switcher/>
    </div>
    <div className='w-full h-[90%] flex flex-col justify-between'>
      <div className='w-full flex-col'>
      <div className='w-full my-[10px]   flex items-center  justify-start px-[40px]'>
      <p className='   text-[14px]  text-white    '>Course Management</p>
      </div>
    
      
      <Link  to='/Adminstrator/MyCourse' className='w-full  mt-0  shadow-sm shadow-gray-700  hover:text-blue-800  cursor-pointer text-center  h-[50px] px-[40px]  font-light  text-[15px]  flex-row flex items-center '>
  <AiOutlineBook size={20}  className='  text-blue-300 '  /> <p className='ml-2  text-blue-300   font-normal    '>My Course</p>   </Link >
     
      <Link  to={'/Adminstrator/MyCourse/add'} className='w-full  mt-0  shadow-sm shadow-gray-700 hover:text-blue-800  cursor-pointer  text-center  h-[50px] px-[40px]  font-light  text-[15px] flex items-center '>
   <PiPlus size={20} className=' text-white  ' /> <p className='ml-2  text-white  font-normal '>Add Course</p>   </Link>  
      <Link to={'/Achievment'} className='w-full  mt-0  shadow-sm shadow-gray-700 hover:text-blue-800  cursor-pointer  text-center  h-[50px] px-[40px]  font-light  text-[15px] flex items-center '>
    <AiOutlineTrophy size={20} className=' text-white  ' />  <p  className='ml-2  text-white   font-normal'>My Achievment</p> 
      </Link>
      </div>
 
  
      <div className='mb-2'>
       
        
       
      <div className='w-full  mt-2  hover:text-blue-800  cursor-pointer text-center ml-[40px] h-[30px]    font-light text-[15px]  flex-row flex items-center '>
  <IoMdSettings size={20} className=' text-white text-black '    /> <p className='ml-2  text-white font-normal text-black   '>Settings</p>   </div>
  <div onClick={()=>{signOut()
  navigate('/login')
}} className='w-full  mt-2  hover:text-blue-800  cursor-pointer text-center ml-[40px] h-[30px]    font-light text-[15px]  flex-row flex items-center '>
  <IoMdOpen size={20} className=' text-white text-black '    /> <p className='ml-2  text-white text-black  font-normal  '>LogOut</p>   </div>
  
      </div>
      
     
  
    </div>
  
  
   </div>
  )
}
