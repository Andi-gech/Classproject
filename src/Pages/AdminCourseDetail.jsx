import React from 'react';
import UseFetchEachAdminCourse from '../Hooks/UseFetchEachAdminCourse';
import { Link, useParams } from 'react-router-dom';

export default function AdminCourseDetail() {
  const { courseid } = useParams();
  const { data } = UseFetchEachAdminCourse(courseid);
  
  return (
    <div className='w-[80%] bg-white ml-[20%] p-4'>
      <div className='w-full bg-white rounded-md shadow-lg flex flex-row'>
        
        
        {/* Enrolled Users Section */}
        <div className='w-[70%] bg-white p-6 rounded-l-md'>
          <p className='text-2xl font-bold text-gray-800 mb-4'>Enrolled Users</p>
          <div className='flex-col'>
            <div className='w-full h-[50px] flex flex-row items-center justify-between bg-gray-200 rounded-md p-2'>
              <div className='w-[40%] font-semibold'>Name</div>
              <div className='w-[30%] font-semibold'>Email</div>
              <div className='w-[30%] font-semibold'>Role</div>
            </div>
            {
              data?.data?.enrolledStudents?.map((item) => (
                <div key={item.user._id} className='w-full h-[50px] flex flex-row items-center justify-between bg-white rounded-md p-2 shadow-sm mt-2'>
                  <div className='w-[40%]'>{item.user.fullName}</div>
                  <div className='w-[30%]'>{item.user.email}</div>
                  <div className='w-[30%]'>{item.user.role}</div>
                </div>
              ))
            }
          </div>
        </div>
        
        {/* Modules Section */}
        <div className='w-[30%] bg-white p-6 rounded-r-md flex flex-col items-center'>
          <p className='text-2xl font-bold text-gray-800 mb-4'>Modules</p>
          {
            data?.data?.courseModules?.map((item) => (
              <div key={item._id} className='w-full h-[50px] flex flex-row items-center justify-between bg-white rounded-md p-2 shadow-sm mt-2'>
                <p className='text-md font-semibold'>{item.name}</p>
                <Link to={`/Adminstrator/MyCourse/${courseid}/${item._id}/addexam`} className='text-blue-600 hover:text-blue-800 transition duration-200'>
                  Add exams
                </Link>
              </div>
            ))
          }
          <Link to={`/Adminstrator/MyCourse/${courseid}/addmodule`} className='w-full mt-6 h-[50px] flex items-center justify-center bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200'>
            Add modules
          </Link>
        </div>
      </div>
    </div>
  );
}
