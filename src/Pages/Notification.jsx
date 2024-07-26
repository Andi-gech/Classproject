import React from 'react';
import { IoNotificationsCircle } from 'react-icons/io5';
import UseFetchNotification from '../Hooks/UseFetchNotification';

export default function Notification() {
  const notifications = [
    { type: 'INFO', message: 'Notification message 1' },
    { type: 'WARNING', message: 'Notification message 2' },
    { type: 'ERROR', message: 'Notification message 3' },
    { type: 'SUCCESS', message: 'Notification message 4' },

    // Add more notifications as needed
  ];
  const{data}=UseFetchNotification()

  return (
    <div className='sm:w-[82%] w-full h-[100vh] sm:ml-[18%] bg-white dark:bg-slate-950'>
      <div className='w-[50%] h-[50px] p-3'>
        <p className='dark:text-white text-xl font-bold'>Notifications</p>
      </div>
      <div className='sm:w-[50%] flex overflow-y-auto h-[500px] items-center justify-start flex-col mx-4'>
        {data?.data.length > 0 ? (
          data?.data.map((notification, index) => (
            <div
              key={index}
              className={`w-full flex flex-col items-center  bg-white dark:text-white justify-between mt-3 shadow-sm shadow-gray-400 px-4 maxh-[100px]   py-2  dark:bg-zinc-950 rounded-md`}
            >
              <div className='w-full px-5 justify-between flex flex-row'>
              <p className=' text-sm line-clamp-2'>{notification.type}: {notification.description}  </p>
              <IoNotificationsCircle size={25} />
              </div>
              <p className=' text-[10px] text-gray-400 self-start mx-5'>{new Date().toLocaleTimeString()}</p>
            </div>
          ))
        ) : (
          <div className='w-full flex items-center dark:text-white justify-center mt-3 px-4 h-[50px]'>
            <p>No Notifications</p>
          </div>
        )}
        <div
          className='w-[50%] flex text-white items-center justify-center bg-blue-700 mt-4 rounded-md h-[50px] cursor-pointer'
          onClick={() => console.log('See More clicked')}
        >
          See More
        </div>
      </div>
    </div>
  );
}
