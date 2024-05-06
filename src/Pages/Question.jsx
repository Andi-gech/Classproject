import React, { useState } from 'react'

export default function Question({onclick,question}) {
    const [selectedanswer,setselectedanswer]=useState()

  return (
    <div className='w-full  mt-4'>
    <div className='w-full min-h-[50px] flex items-center  flex-row'>
     <p className='font-bold mx-2'>1</p>
     <p>{question.question}</p>
    </div>
  <div className=' flex  flex-col flex-wrap     w-[70%]'>
    {
        question.Answer.map((item)=>{
            
  return(   <div onClick={()=>{onclick({
        Answerid:item.id,
        Questionid:question.id
     })
     setselectedanswer(item.id)}} className={`${selectedanswer===item.id?"bg-purple-500 text-white" :""}  rounded-md hover:bg-purple-500 hover:text-white  cursor-pointer shadow-sm shadow-gray-300 mx-[50px]  flex-shrink-0 mt-3 flex flex-row max-w-[600px] p-[13px]`}>
     <p className='font-bold  mx-2' >{item.id}</p>
     <p >
     {
        item.answer
     } </p>
 </div>
        )})
    }

  

   
   
    
   
    </div>
 </div>
  )
}
