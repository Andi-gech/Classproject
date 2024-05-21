import React, { useEffect, useState } from 'react'
import { FaClock } from 'react-icons/fa'
import Question from './Question'
import Countdown from 'react-countdown';
import { Link, useParams } from 'react-router-dom';
import ExamResult from './ExamResult';
import UseFetchQuiz from '../Hooks/UseFechQuiz';

import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import axios from 'axios';

export default function Exam() {
    const [ready ,setready]=useState(false)
    const [completed,setcompleted]=useState(false)
    const [examAnswers,setexamAnswer]=useState([])
    
    const [marks,setmark]=useState(0)
    const [ispassed,setispassed]=useState(false)
    const [time,settime]=useState(0)
    const [remainingTime,setremainingTime]=useState(0.2* 60 * 1000)
    const {examid,id,mid}=useParams()
    const {data}=UseFetchQuiz(examid)
    

     console.log(data?.data?.questions)
     useEffect(() => {
       settime(data?.data?.examDuration* 60 * 1000)
     },data)

 const authHeader = useAuthHeader()
    const Result =async () =>{
      const res=await axios.post(`http://localhost:8080/api/exams/${id}/${mid}/${examid}/evaluate`,{answers:examAnswers},{headers:{'_auth':`${authHeader}`}})
   if(res.status==200){
    console.log(res)
    console.log(res,"res")
    setmark(res?.data?.totalMarks)}
    setispassed(res?.data?.isPassed)
  
    }

    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        Result()

        setcompleted(true)
        
      } else {
        // Render a countdown
        return <span>{minutes}:{seconds}</span>;
      }
    };
  
    const HandleExamOptions=(data)=>{
    

        const found = examAnswers.find(item => item.Questionid === data.Questionid)
        if (found) {
            found.Answerid = data.Answerid
          
        } else {
            examAnswers.push(data)
        }
        console.log(examAnswers)

    }
   
    if(ready){
  return (
    <div className='ml-[20%] pl-[10px] w-[80%] h-screen items-center overflow-y-auto  flex flex-col dark:bg-zinc-900 bg-white'>
        <div className=' fixed top-0  right-[0%] w-[80%] px-[100px]  h-[60px]  bg-purple-700 pt-2 flex  items-center justify-between flex-row'>
            <div className='text-white text-[20px] font-bold'>
                <p className='text-black dark:text-white'>Exam Name</p>
            </div>
           <div className='text-white text-[20px] font-bold'>
            Quiz-[1]
           </div>
           <div className='text-white text-[20px] flex flex-row  items-center font-bold'>
            <FaClock size={20}/>
           
            <p className='  ml-[10px] font-bold '>
               <Countdown date={Date.now() + (time)}  renderer={renderer}/>
            </p>
           </div>
        </div>
        <div className='py-[50px]   w-full '>
            {
                data?.data?.questions?.map((question)=>{
                    return <Question key={question._id} selectedanswer={examAnswers.find(item => item.Questionid === question.id)} question={question} onclick={(data)=>HandleExamOptions(data)}/>
                }
                    
                )
            }
        
        </div>
        <div onClick={()=>{
          Result()
          setcompleted(true)
        }} className='h-[50px] w-[300px] flex items-center justify-center shrink-0 bg-purple-700 rounded-md'>
          <p className='text-white '>Complete</p></div>
        {
          completed && <ExamResult link={`/courseName/courseModule/${id}/${mid}`} onretake={()=>{
            setcompleted(false)
            setexamAnswer([])
            setmark(0)
            setremainingTime(0.2* 60 * 1000)
            setready(false)
          }} mark={marks} isPassed={ispassed}/>
        }


    </div>
  )

}
if(!ready){
return (
    <div className='ml-[20%] w-[80%] h-screen  dark:bg-zinc-950 flex flex-col  items-center py-5 px-5 justify-center '>
        <div className='w-[600px] h-[400px] dark:shadow-gray-600 shadow-zinc-700 flex items-center justify-center flex-col   shadow-sm'>
<div  className='p-[50px] flex  flex-col  items-center justify-center'>
<div className=' text-black dark:text-white font-bold    text-[24px]'>Notice</div>
        <div className='h-full bg-white  dark:bg-zinc-950 flex flex-col  items-center'>
            <p className=' text-black dark:text-white'>You Are About To Start A Small Quiz.The Quiz Contains 5 Questions And Each Question Contains 4 Options  You Have 30 Min To Complete The Quiz</p>
            <p className=' text-gray-400  text-sm'>Do You Want To Start The Quiz Now</p>
        <div onClick={()=>{setready(true)
      }} className='w-[200px] cursor-pointer hover:bg-opacity-85 h-[50px] mt-3 flex items-center justify-center bg-purple-600 rounded-full'>
            <p className=' text-white'>Start Quiz</p>
        </div>
        </div>
</div>
       
        </div>

    </div>
)
}
}