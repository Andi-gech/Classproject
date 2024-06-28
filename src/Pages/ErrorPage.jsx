import React from 'react'
import { useNavigate } from 'react-router-dom'





export default function ErrorPage({error,symbol}) {
  const navigate = useNavigate()

  return (
    <div className=' w-full flex flex-col items-center justify-center bg-white h-[99vh] '>
        <img src={symbol} className='w-[300px] h-[300px] '/>
        <p className='text-3xl  font-bold'>{error}</p>
        <div onClick={() => navigate(-1)} className='w-[300px] h-[50px] bg-blue-600 rounded-md mt-3'>
          <p className='text-white w-full h-full flex items-center justify-center'>Go Back</p>
        </div>
        
    </div>
  )
}
