import React from 'react';
import { Link } from 'react-router-dom';
import UseFetchAdminCourse from '../Hooks/useFetchAdminCourse';

export default function AdminCourse() {
  const { data } = UseFetchAdminCourse();
  
  return (
    <div className='ml-[20%] w-[80%] flex items-center flex-col'>
      <div className='w-full h-[80px] pt-2 bg-gray-800 text-white px-4 p-[10px] justify-center items-center flex flex-row rounded-t-md shadow-md'>
        <p className='text-xl font-semibold'>My Courses</p>
      </div>
      
      <div className='w-full overflow-y-scroll pb-[50px] h-[400px] flex-wrap flex flex-row items-center justify-center bg-gray-100 shadow-md rounded-b-md'>
        {
          data?.data?.map(
            (item) => (
              <Link 
                to={`/Adminstrator/MyCourse/${item._id}`} 
                key={item._id} 
                className='w-[300px] h-[200px] mt-[20px] mx-[10px] bg-white shadow-md rounded-md hover:shadow-lg transition duration-200'
              >
                <img 
                  src={"https://picsum.photos/300/130"} 
                  className='w-full h-[60%] object-cover rounded-t-md' 
                  alt={item.name} 
                />
                <div className='w-full h-[40%] mx-2 flex flex-col p-2'>
                  <p className='text-md font-bold text-gray-800'>{item.name}</p>
                  <p className='text-sm line-clamp-2 text-gray-500'>{item.description}</p>
                </div>
              </Link>
            )
          )
        }
      </div>

      <Link 
        to={'/Adminstrator/MyCourse/add'}  
        className='w-[200px] h-[50px] mt-6 bg-blue-600 text-white flex items-center justify-center rounded-md shadow-md hover:bg-blue-700 transition duration-200'
      >
        <p className='font-semibold'>Add Course</p>
      </Link>
    </div>
  );
}
