import React, { useState } from 'react'

export default function Question({onclick,question}) {
    const [selectedanswer,setselectedanswer]=useState()
  

  return (
    <div className='w-full  mt-4'>
    <div className='w-full min-h-[50px] flex items-center  flex-row'>
     <p className='font-bold text-black dark:text-white mx-2'>{question?.order}</p>
     <p className='text-black font-bold text-[20px] dark:text-white'>{question?.question}</p>
    </div>
  <div className=' flex  flex-col flex-wrap     w-[70%]'>
    {
        question?.answers?.map((item,key)=>{
            
  return(   <div onClick={()=>{onclick({
        Answerid:item?._id,
        Questionid:question?._id
     })
     setselectedanswer(item?._id)}} className={`${selectedanswer===item?._id?"bg-purple-900 text-white" :""}  rounded-md hover:bg-purple-900 hover:text-white  cursor-pointer shadow-sm dark:shadow-gray-800 shadow-gray-300 mx-[50px]  flex-shrink-0 mt-3 flex flex-row max-w-[600px] p-[13px]`}>
     <p className='font-bold text-black dark:text-white mx-2' >{key+1}</p>
     <p className='text-black dark:text-white' >
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
