import React, { useEffect, useState } from 'react'
import { FaClock } from 'react-icons/fa'
import Question from './Question'
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import ExamResult from './ExamResult';

export default function Exam() {
    const [ready ,setready]=useState(false)
    const [completed,setcompleted]=useState(false)
    const [examAnswers,setexamAnswer]=useState([])
    
    const [marks,setmark]=useState(0)
    const [remainingTime,setremainingTime]=useState(0.2* 60 * 1000)

     
    const examQuestion=[
      {
          id:1,
          question:"What is Lorem Ipsum?",            
          Answer:[
        {
          id:1,
          answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          correct:false
        },
        {
          id:2,
          answer:"It is contextual Text.",
          correct:true
        },
        {
          id:3,
          answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          correct:false
        },
        {
          id:4,
          answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          correct:false
        }

          ]

      },
      {
          id:2,
          question:"What is JAvascript",            
          Answer:[
        {
          id:1,
          answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          correct:false
        },
        {
          id:2,
          answer:"It is contextual Text.",
          correct:false
        },
        {
          id:3,
          answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          correct:true
        }
              
          ]
      }
  ]
    const Result = () =>{
      var mark=0
        examAnswers.map((item)=>{
          examQuestion.find((data)=>{
            if(data.id===item.Questionid){
              if(data.Answer.find((answer)=>{
                if(answer.id===item.Answerid){
                  if(answer.correct){
                    mark=mark+1
                  }
                }
              })){
                
              }
            }
          })
        })
       var markPercentage=(mark/examQuestion.length)*100
       
        return markPercentage
    }

    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        const data=Result()
        console.log(data)
        setmark(data)
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
    <div className='ml-[21%] w-[80%] h-screen items-center  flex flex-col bg-white'>
        <div className=' fixed top-0  right-[1%] w-[80%] px-[100px]  h-[60px]  bg-purple-700 pt-2 flex  items-center justify-between flex-row'>
            <div className='text-white text-[20px] font-bold'>
                <p>Exam Name</p>
            </div>
           <div className='text-white text-[20px] font-bold'>
            Quiz-[1]
           </div>
           <div className='text-white text-[20px] flex flex-row  items-center font-bold'>
            <FaClock size={20}/>
            <p className='  ml-[10px] font-bold '>
               <Countdown date={Date.now() + remainingTime}  renderer={renderer}/>
            </p>
           </div>
        </div>
        <div className='py-[50px]   w-full '>
            {
                examQuestion.map((question)=>{
                    return <Question key={question.id} selectedanswer={examAnswers.find(item => item.Questionid === question.id)} question={question} onclick={(data)=>HandleExamOptions(data)}/>
                }
                    
                )
            }
        
        </div>
        {
          completed && <ExamResult onretake={()=>{
            setcompleted(false)
            setexamAnswer([])
            setmark(0)
            setremainingTime(0.2* 60 * 1000)
            setready(false)
          }} mark={marks}/>
        }


    </div>
  )

}
if(!ready){
return (
    <div className='ml-[21%] w-[80%] h-screen  flex flex-col  items-center py-5 px-5 justify-center '>
        <div className='w-[600px] h-[400px] flex items-center justify-center flex-col   border-2'>
<div  className='p-[50px] flex  flex-col  items-center justify-center'>
<div className=' text-black font-bold    text-[24px]'>Notice</div>
        <div className='h-full bg-white  flex flex-col  items-center'>
            <p>You Are About To Start A Small Quiz.The Quiz Contains 5 Questions And Each Question Contains 4 Options  You Have 30 Min To Complete The Quiz</p>
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