import React, { useEffect, useState } from 'react'
import logo from '../assets/Untitled.png'
import { AiFillStar, AiOutlineHome ,AiOutlineTrophy} from "react-icons/ai";
import { IoIosNotificationsOutline ,IoMdSettings,IoMdOpen} from "react-icons/io";
import { TiBook } from "react-icons/ti";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import Switcher from '../Components/Switch';
import image from '../assets/curvestyle.png'
import UseTopratedUser from '../Hooks/UsetopRatedTeacher';
import { AiOutlineBars } from 'react-icons/ai';
export default function Header() {
    const signOut = useSignOut();
    const navigate = useNavigate();
    const {data}=UseTopratedUser()
    const location = useLocation();
    const [menuopen,setmenuopen]=useState(false)

    useEffect(() => {
      setmenuopen(false)
    }, [location.pathname]);


    

  

  return (
    <div className=' select-none'>
      <div  className='w-[100%] sm:hidden   flex items-center px-5 md-hidden bg-white dark:bg-slate-950 top-0 z-[500000000] fixed h-[50px]'>
    <AiOutlineBars onClick={()=>setmenuopen(!menuopen)} size={20} className='float-left text-black dark:text-white '/>
  </div>
  {menuopen &&
      <div className='w-[80%] bg-white dark:bg-slate-950 flex md:hidden sm:hidden py-[60px] fixed top-0 h-[100vh] z-[200000]  flex-col '>
        <div className='w-full h-[50px] flex items-center justify-between px-5'>
          <img src={logo} className='w-[50px]   h-[50px]'/>
          <Switcher/>
        </div>
        <div className='w-full h-[90%] flex flex-col items-center '>
        <Link  to='/'  className='w-full  mt-0  shadow-sm dark:shadow-zinc-800 shadow-zinc-200  hover:text-blue-800  cursor-pointer text-center  h-[50px] px-[40px]  font-light  text-[15px]  flex-row flex items-center '>
  <AiOutlineHome size={20}  className='  dark:text-white text-black '  /> <p className={`ml-2   ${location.pathname==="/"?"text-blue-400":"dark:text-white text-gray-700"}   font-normal    `}>Dashboard</p>   </Link >
      <Link   to={'/Notification'} className='w-full  mt-0  shadow-sm dark:shadow-zinc-800 shadow-zinc-200  hover:text-blue-800  cursor-pointer text-center  h-[50px] px-[40px]  font-light  text-[15px] flex items-center '>
     <IoIosNotificationsOutline size={20} className=' dark:text-white text-black  ' /> <p className={`ml-2  ${location.pathname==="/Notification"?"text-blue-400":"dark:text-white text-black"}   font-normal    `}>Notification</p>   </Link  >
      <Link  to={'/courses'} className='w-full  mt-0  shadow-sm dark:shadow-zinc-800 shadow-zinc-200 hover:text-blue-800  cursor-pointer  text-center  h-[50px] px-[40px]  font-light  text-[15px] flex items-center '>
    <TiBook size={20} className=' dark:text-white text-black  ' />  <p className={`ml-2  ${location.pathname==="/courses"?"text-blue-400":"dark:text-white text-black"}   font-normal    `}>Lesson</p>   </Link>  
      <Link to={'/Achievment'} className='w-full  mt-0  shadow-sm dark:shadow-zinc-800 shadow-zinc-200 hover:text-blue-800  cursor-pointer  text-center  h-[50px] px-[40px]  font-light  text-[15px] flex items-center '>
    <AiOutlineTrophy size={20} className=' dark:text-white text-black  ' />  <p  className={`ml-2  ${location.pathname==="/Achievment"?"text-blue-400":"dark:text-white text-black"}   font-normal    `}>Achievment</p> 
      </Link>
        </div>
        <div className='w-full h-[10%] flex items-center justify-center'>
        <button onClick={()=>signOut()} className='w-[150px] h-[40px] bg-blue-500 text-white rounded-md'>Log Out</button>
        </div>
      </div>
}
   
    <div className='  w-[250px] shrink-0 sm:flex fixed hidden left-0  z-40 h-screen  rounded-r-md  bg-white dark:bg-slate-950  text-white   flex-col items-center dark:shadow-gray-600 shadow-gray-200  shadow-md  z-10'>
    <image className=' z-20 absolute bottom-0' src={image}/>
    <div className=' h-[90px] w-full px-2 flex flex-row items-center justify-between  '>
    <img src={logo} className='w-[50px]   h-[50px]'/>
    <div className=' ml-2  h-full flex flex-col items-start justify-center'>
    <p className=' font-bold text-xl  font-j   dark:text-white  text-black   '>Dec Online</p>
    <p className='  text-[12px]  font-j dark:text-white text-black  font-bold '>Online Education Service</p>
    </div>
    <Switcher/>
    </div>
    <div className='w-full h-[90%] flex flex-col justify-between'>
      <div className='w-full  mt-5 flex-col'>
      
    
      
      <Link  to='/'  className='w-full  mt-0  font-j shadow-sm dark:shadow-zinc-800 shadow-zinc-100  hover:text-blue-800  cursor-pointer text-center  h-[50px] px-[40px]  font-light  text-[15px]  flex-row flex items-center '>
  <AiOutlineHome size={20}  className='  dark:text-white text-gray-700 '  /> <p className={`ml-2   ${location.pathname==="/"?"text-blue-400 font-bold":"dark:text-white text-gray-700"}   font-normal     `}>Dashboard</p>   </Link >
      <Link   to={'/Notification'} className='w-full  mt-0  shadow-sm dark:shadow-zinc-800 shadow-zinc-100  hover:text-blue-800  cursor-pointer text-center  h-[50px] px-[40px]  font-light  text-[15px] flex items-center '>
     <IoIosNotificationsOutline size={20} className=' dark:text-white text-gray-700  ' /> <p className={`ml-2  ${location.pathname==="/Notification"?"text-blue-400 font-bold":"dark:text-white text-gray-700"}   font-normal    `}>Notification</p>   </Link  >
      <Link  to={'/courses'} className='w-full  mt-0  shadow-sm dark:shadow-zinc-800 shadow-zinc-100 hover:text-blue-800  cursor-pointer  text-center  h-[50px] px-[40px]  font-light  text-[15px] flex items-center '>
    <TiBook size={20} className=' dark:text-white text-gray-700  ' />  <p className={`ml-2  ${location.pathname==="/courses"?"text-blue-400 font-bold":"dark:text-white text-gray-700"}   font-normal    `}>Lesson</p>   </Link>  
      <Link to={'/Achievment'} className='w-full  mt-0  shadow-sm dark:shadow-zinc-800 shadow-zinc-100 hover:text-blue-800  cursor-pointer  text-center  h-[50px] px-[40px]  font-light  text-[15px] flex items-center '>
    <AiOutlineTrophy size={20} className=' dark:text-white text-gray-700  ' />  <p  className={`ml-2  ${location.pathname==="/Achievment"?"text-blue-400 font-bold":"dark:text-white text-gray-700"}   font-normal    `}>Achievment</p> 
      </Link>
      </div>
     
      <div className='flex flex-col'>
      <div className='w-full   ml-[40px] flex items-center '>
      <p className='  dark:text-white text-black    text-[14px]  font-medium '>TOP RATED TEACHERS</p>
      </div>
      <div className='mt-[15px]  '>
    
      {data?.data.slice(0,2).map((item)=>{
        return(  <div className='w-[80%]   px-2 h-[50px]  hover:text-blue-800  cursor-pointer text-center ml-[30px]  shadow-sm     font-light text-[15px]  flex-row flex items-center '>
        <img src={item?.profilepic?`http://localhost:8080/images/${item?.profilepic}`:"https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt='user' className='h-[35px] w-[35px] rounded-full' /> 
        <div className='flex   w-[170px]  flex-col justify-center  pl-3 items-start'>
          <p className='m-0 p-0 dark:text-white text-gray-700  font-normal    text-sm  '>Mr. {item.fullName}</p>
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
       
        
       
      <div onClick={()=>navigate('/settings')} className='w-full  mt-2  hover:text-blue-800  cursor-pointer text-center ml-[40px] h-[30px]    font-light text-[15px]  flex-row flex items-center '>
  <IoMdSettings size={20} className=' dark:text-white text-black '    /> <p className='ml-2  dark:text-white font-normal text-black   '>Settings</p>   </div>
  <div onClick={()=>{signOut()
  navigate('/login')
}} className='w-full  mt-2  hover:text-blue-800  cursor-pointer text-center ml-[40px] h-[30px]    font-light text-[15px]  flex-row flex items-center '>
  <IoMdOpen size={20} className=' dark:text-white text-black '    /> <p className='ml-2  dark:text-white text-black  font-normal  '>LogOut</p>   </div>
  
      </div>
      
     
  
    </div>
  
  
   </div>
   </div>
  )
}
