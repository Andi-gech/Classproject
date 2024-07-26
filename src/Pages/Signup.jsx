import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../assets/curvestyle.png'
import axios from 'axios';
import ErrorPopup from '../Components/ErrorPopup';
import { useMutation } from '@tanstack/react-query';

export default function Signup() {
  const [Fullname, setFullName] = React.useState('')
  const [Email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmpassword, setConfirmPassword] = React.useState('')
  const [error, setError] = React.useState(null)
  const [isTeacher,setisTeacher]=React.useState(false)
const navigate = useNavigate()
const post=async()=>{
  return await axios.post('http://192.168.1.15:8080/api/user/create', { fullName:Fullname, email:Email, password ,role:isTeacher ? 'teacher':'student',confirmpassword })
  
}
const mutation=useMutation({
  mutationFn:post,
  mutationKey:['signup'],
  onSuccess:(data)=>{
    
    navigate('/login')
  },
  onError:(err)=>{
    setError(err.response.data)
    setTimeout(() => {
      setError(null);
    }, 3000);
  }
  
    

})
 

  return (
    <div className='bg-white select-none flex-col  w-screen h-screen flex items-center justify-center'>
    <div className=' overflow-hidden  bg-white items-center flex-col shadow-sm w-[400px] flex rounded-[3%] h-[550px]  shadow-gray-500'>
<div className=' relative w-full h-[50px] flex items-center justify-center'>
  <p className='font-bold text-center text-[25px]'>Signup</p>
  
<ErrorPopup error={error}/>

</div>
<div className='w-[90%] relative h-[70px] mb-[10px] '>
          <p className='  text-sm z-10 bg-white  dark:bg-zinc-900 px-2 py-2 dark:text-white'>FullName</p>
          <input onChange={(e) => setFullName(e.target.value)}  type='text' className='w-full  bg-white dark:bg-zinc-800 outline-purple-500 -z-10 h-[45px] border-gray-400 rounded-md border-none shadow-sm shadow-gray-400'/>
        </div> 
<div className='w-[90%] relative h-[70px] mt-[5px] '>
          <p className='  text-sm z-10 bg-white  dark:bg-zinc-900 px-2 py-2 dark:text-white'>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className='w-full  bg-white dark:bg-zinc-800 outline-purple-500 -z-10 h-[45px] border-gray-400 rounded-md border-none shadow-sm shadow-gray-400'/>
        </div> 
        <div className='w-[90%] relative h-[70px] mt-4 '>
          <p className='  text-sm z-10 bg-white  dark:bg-zinc-900 px-2 py-2 dark:text-white'>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} type='password' className='w-full  bg-white dark:bg-zinc-800 outline-purple-500 -z-10 h-[45px] border-gray-400 rounded-md border-none shadow-sm shadow-gray-400'/>
        </div>
        <div className='w-[90%] relative h-[70px] mt-4 '>
          <p className='  text-sm z-10 bg-white  dark:bg-zinc-900 px-2 py-2 dark:text-white'>Confirm Password</p>
          <input onChange={(e) => setConfirmPassword(e.target.value)} type='password' className='w-full  bg-white dark:bg-zinc-800 outline-purple-500 -z-10 h-[45px] border-gray-400 rounded-md border-none shadow-sm shadow-gray-400'/>
        </div> 
        <div className='w-[90%] flex flex-row items-center relative h-[70px] mt-4'><p className='mx-2'>is Teacher</p>
          <input type='checkbox' onChange={(e)=>setisTeacher(e.target.checked)} value={isTeacher} /></div> 
        <div onClick={()=>mutation.mutate({fullName:Fullname,email:Email,password,confirmpassword})} className='w-[80%] mt-[40px] cursor-pointer hover:bg-zinc-700 rounded-md h-[50px] flex items-center justify-center bg-black'>
          <p className='text-white font-bold'>Signup</p>
        </div>
        <div className='w-full  px-3 h-[50px] justify-center mt-7 flex flex-col  '>
        <p className='mt-[5px]  text-[14px] font-medium'>Already have an account <Link  to={'/login'} className=' text-blue-600 underline  cursor-pointer'>Sign in</Link ></p>
     {/* <p className=' text-blue-600  text-[14px]  cursor-pointer'> Forget Your Password</p> */}
        </div>
        
      
    </div>
  </div>
  )
}
