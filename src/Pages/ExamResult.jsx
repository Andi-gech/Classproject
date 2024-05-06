import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ExamResult({mark,onretake}) {
const [passed,setPassed] = useState(false)
const exam={
    id:1,
    name:"Exam 1",
    Duration:30,
    passMark:50
}
useEffect(() => {
  if(mark>=exam.passMark){
    setPassed(true)
  }
}, [mark])


  return (
    <div className='w-[80%] h-full   bg-white fixed top-0 right-0 flex items-center justify-center flex-col'>
    <div className='w-[600px] h-[400px] flex items-center justify-center flex-col   border-2'>
<div  className='p-[50px] flex  flex-col  items-center justify-center'>
<div className=' text-black font-bold    text-[44px]'>Congratuation</div>
<p className='text-gray-400  text-sm'>You Have Completed The Quiz</p>
<div className='text-black flex flex-row'>
<p className='text-[20px] font-bold'>Your Have got </p>
<p className='text-[20px] font-bold text-green-600'> {mark}</p>
<p className='text-[20px] font-bold'>out of</p>
{/* <p className='text-[20px] font-bold text-orange-600'>&nbsp;&nbsp;{examQuestion.length}</p> */}


</div>
{
passed ? <Link to={'/courseName/courseModule/2'} className='w-[300px] bg-purple-600 mt-3 rounded-full text-white h-[50px] flex items-center justify-center'>
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
