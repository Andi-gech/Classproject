import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ExamResult({mark,isPassed,onretake,link}) {
  const navigate = useNavigate()




  return (
    <div className='w-[80%] h-full text-black dark:text-white dark:bg-zinc-950  bg-white fixed top-0 right-0 flex items-center justify-center flex-col'>
    <div className='w-[600px] h-[400px] flex items-center justify-center flex-col    shadow-sm shadow-gray-500'>
<div  className='p-[50px] flex  flex-col  items-center justify-center'>
<div className=' text-black dark:text-white font-bold    text-[44px]'>Congratuation</div>
<p className='text-gray-400   text-sm'>You Have Completed The Quiz</p>
<div className='text-black dark:text-white flex flex-row'>
<p className='text-[20px] font-bold'>Your Have got </p>
<p className='text-[20px] font-bold text-green-600'> &nbsp; { mark } &nbsp;</p>


</div>
{
isPassed ? <Link to={-1} className='w-[300px] bg-purple-600 mt-3 rounded-full text-white h-[50px] flex items-center justify-center'>
<p className=' font-bold'>Go to Next Lesson</p>
</Link>:<Link  onClick={onretake} className='w-[300px] bg-purple-600 mt-3 rounded-full text-white h-[50px] flex items-center justify-center'>
<p className=' font-bold'>Retake</p>
</Link>
}


  
    </div>
      </div>
      </div> 
  )
}
