import React from 'react'
import logo from '../assets/Untitled.png'
import { AiFillStar, AiOutlineHome ,AiOutlineTrophy} from "react-icons/ai";
import { IoIosNotificationsOutline ,IoMdSettings,IoMdOpen} from "react-icons/io";
import { TiBook } from "react-icons/ti";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import Switcher from '../Components/Switch';
import image from '../assets/curvestyle.png'
import UseTopratedUser from '../Hooks/UsetopRatedTeacher';
export default function Header() {
    const signOut = useSignOut();
    const navigate = useNavigate();
    const {data}=UseTopratedUser()
  

  return (
    
    <div className='  w-[18%] sm:flex fixed hidden left-0  z-40 h-screen  rounded-r-md  bg-blue-900  text-white   flex-col items-center dark:shadow-gray-600 shadow-gray-300  shadow-md  z-10'>
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
      <p className='   text-[14px]  text-white    '>OVERVIEW</p>
      </div>
    
      
      <Link  to='/' className='w-full  mt-0  shadow-sm shadow-gray-700  hover:text-blue-800  cursor-pointer text-center  h-[50px] px-[40px]  font-light  text-[15px]  flex-row flex items-center '>
  <AiOutlineHome size={20}  className='  text-blue-300 '  /> <p className='ml-2  text-blue-300   font-normal    '>Dashboard</p>   </Link >
      <Link   to={'/Notification'} className='w-full  mt-0  shadow-sm shadow-gray-700  hover:text-blue-800  cursor-pointer text-center  h-[50px] px-[40px]  font-light  text-[15px] flex items-center '>
     <IoIosNotificationsOutline size={20} className=' text-white  ' /> <p className='ml-2  text-white font-normal  '>Notification</p>   </Link  >
      <Link  to={'/courses'} className='w-full  mt-0  shadow-sm shadow-gray-700 hover:text-blue-800  cursor-pointer  text-center  h-[50px] px-[40px]  font-light  text-[15px] flex items-center '>
    <TiBook size={20} className=' text-white  ' />  <p className='ml-2  text-white  font-normal '>Lesson</p>   </Link>  
      <Link to={'/Achievment'} className='w-full  mt-0  shadow-sm shadow-gray-700 hover:text-blue-800  cursor-pointer  text-center  h-[50px] px-[40px]  font-light  text-[15px] flex items-center '>
    <AiOutlineTrophy size={20} className=' text-white  ' />  <p  className='ml-2  text-white   font-normal'>Achievment</p> 
      </Link>
      </div>
     
      <div className='flex flex-col'>
      <div className='w-full   ml-[40px] flex items-center '>
      <p className='  text-white   text-[14px]  font-medium '>TOP RATED TEACHERS</p>
      </div>
      <div className='mt-[15px]'>
    
      {data?.data.map((item)=>{
        return(  <div className='w-[80%]   px-2 h-[50px]  hover:text-blue-800  cursor-pointer text-center ml-[30px]  shadow-sm     font-light text-[15px]  flex-row flex items-center '>
        <img src='https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=2000' alt='user' className='h-[30px] w-[30px] rounded-full' /> 
        <div className='flex   w-[170px]  flex-col justify-center  pl-3 items-start'>
          <p className='m-0 p-0 text-white  font-normal    text-sm  '>Mr. {item.fullName}</p>
          {/* <p className=' font-serif text-[12px]  text-gray-600'>Accountant</p> */}
          <div className='w-full flex flex-row text-sm items-center'>
          <AiFillStar size={13} color={item.averageRating >= 1 ? 'orange' : 'gray'}/>
      <AiFillStar size={13} color={item.averageRating >= 2 ? 'orange' : 'gray'}/>
      <AiFillStar size={13} color={item.averageRating >= 3 ? 'orange' : 'gray'}/>
      <AiFillStar size={13} color={item.averageRating >= 4 ? 'orange' : 'gray'}/>
      <AiFillStar size={13} color={item.averageRating >= 5 ? 'orange' : 'gray'}/>
            <p className='text-[10px] ml-2'>({item.averageRating.toFixed(2)})</p>
          </div>
          </div>  
          </div>)
      })}
    
         
      </div>
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
