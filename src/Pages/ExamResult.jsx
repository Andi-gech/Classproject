import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import sucess from '../assets/sucess.png'
import fail from '../assets/fail.jpg'

export default function ExamResult({mark,isPassed,onretake,link}) {
  const navigate = useNavigate()




if(isPassed)
{
  return (
    <div className='fixed top-0 bg-white dark:bg-slate-950 w-full h-full flex  items-center justify-center '>
    <div className='sm:w-[40%] w-full h-[400px] py-4 flex items-center flex-col justify-center shadow-md shadow-gray-400 bg-white '>
    <div className='w-full text-black font-bold text-lg  shadow-sm shadow-white h-[50px] flex flex-col items-center justify-center'>
   <span className='font-bold text-6xl'>Congratulations</span>  You Have Passed The Exam
        </div>
        <img src={sucess} className='w-[200px] h-[200px] mt-3 '/>

      <div className='w-full flex flex-col items-center justify-center'>
      <Link to={-1} className='w-[300px] bg-blue-600 mt-3 rounded-full text-white h-[50px] flex items-center justify-center'>
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
    <div className='fixed top-0 dark:bg-slate-950 bg-white w-full h-full flex  items-center justify-center '>
      <div className='sm:w-[40%] w-full h-[400px] flex flex-col items-center justify-center py-7 shadow-md shadow-gray-400 bg-white '>
        <div className='w-full text-black font-bold text-lg  shadow-sm shadow-white h-[50px] flex flex-col items-center justify-center'>
   <span className='font-bold text-6xl'>Sorry</span>  You Have Faild The Exam
        </div>
        <img src={fail} className='w-[200px] h-[200px] mt-3 '/>
        <div className='w-full flex flex-col items-center justify-center'>
        <Link  onClick={onretake} className='w-[300px] bg-blue-600 mt-3 rounded-full text-white h-[50px] flex items-center justify-center'>
<p className=' font-bold'>Retake</p>
</Link>
        </div>
       


      </div>
    </div>
  )

}
 
}
