import React, { useState } from 'react'

export default function Question({onclick,question}) {
    const [selectedanswer,setselectedanswer]=useState()
  

  return (
    <div className='w-full  mt-4'>
    <div className='w-full min-h-[50px] flex items-center  flex-row'>
     <p className='font-bold text-black dark:text-white mx-2'>{question?.order}</p>
     <p className='text-black font-bold text-[20px] dark:text-white'>{question?.question}</p>
    </div>
  <div className=' flex  flex-col flex-wrap     sm:w-[70%] w-[95%]'>
    {
        question?.answers?.map((item,key)=>{
            
  return(   <div onClick={()=>{onclick({
        Answerid:item?._id,
        Questionid:question?._id
     })
     setselectedanswer(item?._id)}} className={`${selectedanswer===item?._id?"bg-blue-900 text-white" :""}  rounded-md sm:hover:bg-blue-900 hover:text-white  cursor-pointer shadow-sm dark:shadow-gray-800 shadow-gray-300 mx-[50px]  flex-shrink-0 mt-3 flex flex-row w-full sm:max-w-[600px] p-[13px]`}>
     <p className={`${selectedanswer===item?._id?" text-white" :""} hover:text-white mx-3 dark:text-white`} >{key+1}</p>
     <p className={`${selectedanswer===item?._id?" text-white" :""} hover:text-white dark:text-white`} >
     {
        item?.answer
     } </p>
 </div>
        )})
    }

  

   
   
    
   
    </div>
 </div>
  )
}
