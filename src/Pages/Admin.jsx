import React, { useState } from 'react';
import axios from 'axios';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import UseFetchCategories from '../Hooks/UseFetchCatagories';
import SuccessPopup from '../Components/SucessPopup';
import ErrorPopup from '../Components/ErrorPopup';

export default function Admin() {
  const [modules, setModules] = useState([{ name: '' }]);
  const [courseName, setCourseName] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [courseDescription, setCourseDescription] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const authHeader = useAuthHeader();

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('name', courseName);
    formData.append('description', courseDescription);
    formData.append('catagory', courseCategory);
    formData.append('image', imageFile);
    console.log(courseCategory, 'courseCategory')

    try {
      const response = await axios.post('http://localhost:8080/api/admin/createCourse', formData, {
        headers: {
          '_auth': authHeader,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Course saved:', response.data);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      setCourseName('');
      setCourseDescription('');
      setCourseCategory('');
      setImageFile(null);
    } catch (error) {
      console.error('Error saving course:', error);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const { data } = UseFetchCategories();
  

  return (
    <div className='sm:ml-[20%] flex relative flex-col items-center sm:w-[80%] w-full'>
      <div className='w-[90%] h-[70px] mt-2 bg-gray-800 text-white flex items-center justify-center rounded-md shadow-md'>
        <p className='text-3xl font-bold'>Admin</p>
      </div>

      <div className='w-[90%] bg-white rounded-md shadow-md p-6 mt-6'>
        {success && <SuccessPopup />}
        {error && <ErrorPopup />}
        <div className='w-full mt-3 flex flex-col'>
          <label className='text-lg font-semibold'>Course Name</label>
          <input
            type="text"
            placeholder='Course Name'
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className='w-full mt-2 h-[40px] border border-gray-300 rounded-md outline-none text-black bg-white p-2 shadow-sm'
          />
        </div>
        <div className='w-full mt-4 flex flex-col'>
          <label className='text-lg font-semibold'>Course Description</label>
          <textarea
            type="text"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            placeholder='Course Description'
            className='w-full mt-2 h-[100px] border border-gray-300 rounded-md outline-none text-black bg-white p-2 shadow-sm'
          />
        </div>
        <div className='w-full mt-4 flex flex-col'>
          <label className='text-lg font-semibold'>Course Image</label>
          <input
            type="file"
            onChange={(e) => setImageFile(e.target.files[0])}
            className='w-full mt-2 h-[40px] outline-none text-black bg-white p-2 shadow-sm'
          />
        </div>
        <div className='w-full mt-4 flex flex-col'>
          <label className='text-lg font-semibold'>Course Category</label>
          <select
            value={courseCategory}
            onChange={(e) => setCourseCategory(e.target.value)}
            className='w-full mt-2 border border-gray-300 rounded-md outline-none text-black bg-white p-2 shadow-sm'
          >
            <option value="">Select Category</option>
            {data?.data.map(category => (
              <option value={category._id} key={category._id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div 
          onClick={handleSave} 
          className='w-full mt-6 bg-blue-600 text-white h-[50px] flex items-center justify-center rounded-md shadow-md cursor-pointer hover:bg-blue-700 transition duration-200'
        >
          Create
        </div>
      </div>
    </div>
  );
}
