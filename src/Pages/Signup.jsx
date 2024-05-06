import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../assets/curvestyle.png'

export default function Signup() {
  const [Fullname, setFullName] = React.useState('')
  const [Email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmpassword, setConfirmPassword] = React.useState('')
  const [error, setError] = React.useState(null)
const navigate = useNavigate()


  return (
    <div className='w-full flex items-center  overflow-y-hidden justify-center'>
      <img src={image} className='w-full h-full fixed -z-10  bottom-0  right-0 '/>
      <div className='w-[400px]  my-8  bg-white   rounded-md border-gray-100  border-2 flex flex-col'>
        <div className='w-full h-[50px] flex items-center justify-center font-bold'><p className=' font-bold text-2xl font-serif'>Sign-up</p></div>
      <div className='w-full    pt-3   flex-col flex items-center justify-start'>
      <div className='w-[350px] relative h-[70px] mt-4 '>
          <p className='  text-sm z-10 bg-white px-2 py-2'>FullName</p>
          <input onChange={(e) => setFullName(e.target.value)} type="text" className='w-full  bg-gray-100 outline-purple-200 -z-10 h-[45px] rounded-md border-2'/>
        </div> 
        <div className='w-[350px] relative h-[70px] mt-4 '>
          <p className='  text-sm z-10 bg-white px-2 py-2'>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} type="text" className='w-full  bg-gray-100 outline-purple-200 -z-10 h-[45px] rounded-md border-2'/>
        </div> 
        <div className='w-[350px] relative h-[70px] mt-4 '>
          <p className='  text-sm z-10 bg-white px-2 py-2'>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} type="text" className='w-full  bg-gray-100 outline-purple-200 -z-10 h-[45px] rounded-md border-2'/>
        </div> 
        <div className='w-[350px] relative h-[70px] mt-4 '>
          <p className='  text-sm z-10 bg-white px-2 py-2'>Confirm Password</p>
          <input onChange={(e) => setConfirmPassword(e.target.value)} type="text" className='w-full  bg-gray-100 outline-purple-200 -z-10 h-[45px] rounded-md border-2'/>
        </div> 
        <p className='w-[350px] text-sm mt-4 text-red-400'> Wrong Username or Password</p>
        <div className='w-[100px] h-[50px] shrink-0 hover:bg-purple-800 cursor-pointer bg-purple-500 rounded-md mt-[30px] flex items-center justify-center'>
          <p className=' text-white font-bold'>SignUp</p>
        </div>
        <div className='w-full flex flex-row px-4 mt-3 '>
          <p className=' text-sm mt-4'>Already have an account?</p>
          <Link to={'/login'} className=' text-sm mt-4 text-blue-500 ml-2'>Login</Link >
        </div>
    
        </div>
      </div>
    </div>
  )
}
