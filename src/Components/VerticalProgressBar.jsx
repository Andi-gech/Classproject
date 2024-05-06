import React, { useEffect, useState } from 'react'

export default function VerticalProgressBar({percent,keys}) {
  const [count,setcount]=useState(0)
  const color=percent<50?"red":(percent>50 && percent<70)?"yellow":(percent>70 && percent<90)?"green":"blue"
  const Day=[
   "Mo","Tu","We","Th","Fr","Sa","Su"
  ]


  useEffect(() => {
    count < percent && setTimeout(() => setcount(count + 1), 10);
  }, [count]);
  
  return (
<div className='flex mx-1 items-center dark:text-white justify-center flex-col'>
      <div className='w-[10px] h-[200px] rounded-full bg-gray-300 rotate-180'>
        <div  style={{
          height:`${count}%`,
         
        }} className={`w-[10px] ${ count<50?"bg-red-500":(count>50 && count<70)?"bg-yellow-400":(count>70 && count<90)?"bg-green-400":"bg-blue-400"}  rounded-full`}></div>
      </div>
      <p className=''>{Day[keys]} {count}%</p>
    </div>
  )
}


