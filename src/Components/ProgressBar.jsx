 import React, { useEffect, useState } from 'react'
 
 export default function ProgressBar({percentage}) {
    const [count,setcount]=useState(0)
    
    useEffect(() => {
        count < percentage && setTimeout(() => setcount(count + 1), 10);
      }, [count]);
   return (
     <div className=' w-full mt-[10px] h-[5px] bg-gray-200 rounded-full'>
       <div style={{width:`${count}%` }} className={`   h-full bg-blue-800 rounded-full`}></div>
     </div>
   )
 }
 