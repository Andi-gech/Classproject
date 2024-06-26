 import React, { useEffect, useState } from 'react'
 
 export default function ProgressBar({percentage}) {
    const [count,setcount]=useState(0)
  
    
    
    useEffect(() => {
        count < percentage && setTimeout(() => setcount(count + 1), 10);
      }, [count,percentage]);
    
   return (
     <div className=' w-[90%]  bg-zinc-100   h-[5px]  rounded-full'>
    
       <div style={{width:`${count}%`,backgroundColor:"green" }} className={`   h-full rounded-full`}></div>
     </div>
   )
 }
 