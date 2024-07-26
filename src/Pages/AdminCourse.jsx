import React from 'react';
import { Link } from 'react-router-dom';
import UseFetchAdminCourse from '../Hooks/useFetchAdminCourse';
import { BsArrowLeft } from 'react-icons/bs';

export default function AdminCourse() {
  const { data } = UseFetchAdminCourse();
  
  return (
    <div className='sm:ml-[20%] flex relative flex-col  sm:w-[80%] w-full'>
    <div className='w-[90%] h-[100px] mt-2  bg-blue-800 text-white flex items-center justify-center rounded-md shadow-md'>
      <div className='absolute hover:bg-zinc-50 hover:bg-opacity-15 rounded-full p-[10px] left-4' onClick={() => navigate(-1)}><BsArrowLeft size={30}/></div>
      
      
      <p className='text-3xl font-bold'>My Courses</p>
    </div>
      
      <div className='w-full overflow-y-scroll pb-[50px] h-[400px] flex-wrap flex flex-row items-start bg-gray-100 shadow-md rounded-b-md'>
        {
          data?.data?.map(
            (item) => (
              <Link 
                to={`/Adminstrator/MyCourse/${item._id}`} 
                key={item._id} 
                className='w-[300px] h-[200px] mt-[20px] mx-[10px] bg-white shadow-md rounded-md hover:shadow-lg transition duration-200'
              >
                <img 
                  src={'http://192.168.1.15:8080/' + item.image} 
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
