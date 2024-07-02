import React, { useState } from 'react'
import UseFetchEachUser from '../Hooks/UseFechEachUser'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineCloudUpload } from 'react-icons/ai'
import { BiArrowToLeft } from 'react-icons/bi'
import { CgArrowLeft } from 'react-icons/cg'

export default function AdminUserDetail() {
    const {id}=useParams()
    const [fullName,setFullName]=useState('')
    const [email,setEmail]=useState('')
    const [role,setRole]=useState('Student')
    const [image,setImage]=useState(null)
    const {data}=UseFetchEachUser(id)
    const navigate=useNavigate()
    
    
  return (  
    <div className='w-[82%] bg-white h-screen ml-[18%] p-4'>
        <div className='w-full bg-white mt-5 rounded-md  flex flex-col'>
            <div className=' relative w-full flex items-center self-start justify-self-start  justify-center h-[100px]'>
        <p className='text-3xl font-bold'>Edit User</p>
        <div onClick={()=>navigate(-1)}  className=' absolute  flex items-center justify-center bg-white shadow-sm shadow-gray-400 rounded-full left-[60px] w-[40px] h-[40px]'>
          <CgArrowLeft color='black' size={30}/>
        </div>
            </div> 
            <div className='w-full flex flex-row'>
            <div className='w-[50%] mx-10'>
              <div className='w-[450px] h-[50px] flex flex-row items-center justify-between   rounded-md p-2'>
                <p className='text-md font-bold text-gray-800 '>Id</p>
               <p className='text-sm font-bold text-gray-500 rounded-md bg-gray-200 border-gray-300  p-2 border-[0.4px] min-w-[300px]  '>{data?.data?._id}</p>
                </div>
                <div className='w-[450px] h-[50px] flex flex-row items-center justify-between  rounded-md p-2'>
                <p className='text-md font-bold text-gray-800 '>User Name</p>
              <input type="text" placeholder={data?.data?.fullName} value={fullName} onChange={(e)=>setFullName(e.target.value)} className='text-sm font-bold text-gray-500 rounded-md border-gray-300  p-2 border-[0.4px] min-w-[300px]  '/>
                </div>
                <div className='w-[450px] h-[50px] flex flex-row items-center   justify-between rounded-md p-2'>
                <p className='text-md font-bold text-gray-800'>Email</p>
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder={data?.data?.email} className='text-sm font-bold text-gray-500 rounded-md border-gray-300  p-2 border-[0.4px] min-w-[300px] '/>
                 </div>
                <div className='w-[450px] h-[50px] flex flex-row items-center   rounded-md p-2'>
                <p className='text-md font-bold text-gray-800 '>Role</p>
                <div className='flex w-[100px] flex-row items-center  mx-[100px]'>
                  
                <select value={role}  onChange={(e)=>setRole(e.target.value)} className='text-sm   font-bold text-gray-500 rounded-md border-gray-300  p-2 border-[0.4px] min-w-[100px] '>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="admin">Admin</option>
                </select>
                <p className='text-sm  font-bold text-gray-500 rounded-md    p-2    '>{data?.data?.role}</p>
                  </div>  </div>
                <div className='w-[450px] h-[100px] flex items-center justify-center'>
                  <div className='text-sm font-bold text-white bg-blue-700 rounded-md p-2 px-[50px]'>Edit</div>
                </div>
               </div>
               <div className=' w-[50%] flex-1 flex-col  flex items-center justify-center '>
                <img src={'https://picsum.photos/200'} className='w-[250px] shadow-md shadow-gray-400 h-[250px] object-cover'/>

          

                <label for="doc">
<div className='mt-5 h-[40px] px-5 mb-5 hover:bg-blue-800 cursor-pointer bg-blue-600 flex items-center justify-center rounded-md'>
  <p className=' text-white'>upload New Pic</p>
  <AiOutlineCloudUpload size={22} className='text-white mx-2'/>
</div>
      <div>
     
   </div>
   <input type="file" id="doc" name="doc"  hidden/>
</label>
               </div>
               
            </div>
            
           

        </div>
     </div>
  )
}
