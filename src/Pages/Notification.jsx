import React from 'react'
import { IoNotificationsCircle } from 'react-icons/io5'

export default function Notification() {
  return (
    <div className='  w-[80%] ml-[20%]'>
      <div  className='w-[50%] h-[50px] p-3'>
        <p className=' text-xl font-bold'>Notifications</p>
      </div>
      <div className='w-[50%] flex  overflow-y-auto h-[400px] items-center justify-center flex-col mx-4'>
    
    { false &&<><div className=' w-full flex items-center  justify-between mt-3 shadow-sm shadow-gray-200 px-4 h-[50px]'>
          <p>HELLO</p>
          <IoNotificationsCircle size={25}/>
        </div>
        <div className=' w-full flex items-center  justify-between mt-3 shadow-sm shadow-gray-200 px-4 h-[50px]'>
          <p>HELLO</p>
          <IoNotificationsCircle size={25}/>
        </div>
        <div className=' w-full flex items-center  justify-between mt-3 shadow-sm shadow-gray-200 px-4 h-[50px]'>
          <p>HELLO</p>
          <IoNotificationsCircle size={25}/>
        </div>
        <div className=' w-full flex items-center  justify-between mt-3 shadow-sm shadow-gray-200 px-4 h-[50px]'>
          <p>HELLO</p>
          <IoNotificationsCircle size={25}/>
        </div>
        <div className=' w-full flex items-center  justify-between mt-3 shadow-sm shadow-gray-200 px-4 h-[50px]'>
          <p>HELLO</p>
          <IoNotificationsCircle size={25}/>
        </div>
        <div className=' w-full flex items-center  justify-between mt-3 shadow-sm shadow-gray-200 px-4 h-[50px]'>
          <p>HELLO</p>
          <IoNotificationsCircle size={25}/>
        </div>
        <div className='w-[50%] flex items-center justify-center bg-purple-500 mt-4  rounded-md h-[50px]'>
          See More
        </div>
        </>
}
        
<p>No Notifications</p>
      </div>
    </div>
  )
}
