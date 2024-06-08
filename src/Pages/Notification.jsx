import React from 'react';
import { IoNotificationsCircle } from 'react-icons/io5';

export default function Notification() {
  const notifications = [
    { type: 'INFO', message: 'Notification message 1' },
    { type: 'WARNING', message: 'Notification message 2' },
    { type: 'ERROR', message: 'Notification message 3' },
    { type: 'SUCCESS', message: 'Notification message 4' },
    { type: 'INFO', message: 'Notification message 5' },
    // Add more notifications as needed
  ];

  return (
    <div className='w-[80%] ml-[20%]'>
      <div className='w-[50%] h-[50px] p-3'>
        <p className='dark:text-white text-xl font-bold'>Notifications</p>
      </div>
      <div className='w-[50%] flex overflow-y-auto h-[400px] items-center justify-center flex-col mx-4'>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div
              key={index}
              className={`w-full flex items-center dark:text-white justify-between mt-3 shadow-sm shadow-gray-200 px-4 h-[50px]  bg-zinc-900 rounded-md`}
            >
              <p>{notification.type}: {notification.message}</p>
              <IoNotificationsCircle size={25} />
            </div>
          ))
        ) : (
          <div className='w-full flex items-center dark:text-white justify-center mt-3 px-4 h-[50px]'>
            <p>No Notifications</p>
          </div>
        )}
        <div
          className='w-[50%] flex items-center justify-center bg-purple-500 mt-4 rounded-md h-[50px] cursor-pointer'
          onClick={() => console.log('See More clicked')}
        >
          See More
        </div>
      </div>
    </div>
  );
}
