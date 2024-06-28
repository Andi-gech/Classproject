import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ExamResult({mark,isPassed,onretake,link}) {
  const navigate = useNavigate()




if(!isPassed)
{
  return (
    <div className='fixed top-0 bg-white w-full h-full flex  items-center justify-center '>
    <div className='w-[40%] h-[400px] shadow-md shadow-gray-400 bg-white '>
      <div className='w-full text-black font-bold text-lg  shadow-sm shadow-white h-[50px] flex flex-col items-center justify-center'>
  Good Job : You Have Pass The Exam
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
      <Link to={-1} className='w-[300px] bg-purple-600 mt-3 rounded-full text-white h-[50px] flex items-center justify-center'>
<p className=' font-bold'>Go to Next Lesson</p>
</Link>
      </div>
     


    </div>
  </div>
  )
}
else
{
  return (
    <div className='fixed top-0 bg-white w-full h-full flex  items-center justify-center '>
      <div className='w-[40%] h-[400px] shadow-md shadow-gray-400 bg-white '>
        <div className='w-full text-black font-bold text-lg  shadow-sm shadow-white h-[50px] flex flex-col items-center justify-center'>
    Sorry : You Have Faild The Exam
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
        <Link  onClick={onretake} className='w-[300px] bg-purple-600 mt-3 rounded-full text-white h-[50px] flex items-center justify-center'>
<p className=' font-bold'>Retake</p>
</Link>
        </div>
       


      </div>
    </div>
  )

}
 
}
