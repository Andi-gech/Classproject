import React, { useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';

import SucessPopup from '../Components/SucessPopup';
import ErrorPopup from '../Components/ErrorPopup';
import { useParams } from 'react-router-dom';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import ProgressBar from '../Components/ProgressBar';

export default function CreateModule() {
  const [courseName, setCourseName] = useState('');
  const [moduleContent, setModuleContent] = useState('');
  const [order, setOrder] = useState(1);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);

  const [Video,setVideo]=useState(null);

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'link', 'image', 'code-block', 'background', 'color', 'size'
  ];

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block', 'background', 'color'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  const Size = Quill.import('attributors/style/size');
  Size.whitelist = ['12px', '14px', '16px', '18px', '20px'];
  Quill.register(Size, true);
  const { courseid } = useParams();
  const authHeader = useAuthHeader();

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append('name', courseName);
      formData.append('content', moduleContent);
      formData.append('order', order);
      if (Video) {
        formData.append('video', Video);
      }
  
      const response = await axios.post(`http://localhost:8080/api/admin/${courseid}/createModule`, formData, {
        headers: {
          '_auth': `${authHeader}`,
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        }
      });
  
      console.log('Module saved:', response.data);
      setSuccess(true);
      setUploadProgress(null);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      setCourseName('');
      setModuleContent('');
      setVideo(null);
      // Reset progress
    } catch (error) {
      setError(error);
      setUploadProgress(null);
      setTimeout(() => {
        setError(null);
      }, 3000);
      console.error('Error saving module:', error);
    }
  };
  

  return (
    <div className='sm:ml-[20%] flex flex-col items-center sm:w-[80%] w-full p-4 bg-gray-50'>
      <div className='w-[90%] h-[50px] mt-3'>
        <p className='text-2xl font-bold text-gray-800'>Create Module</p>
      </div>
      {uploadProgress && (
      <div className='w-[90%] mt-3'>
        <ProgressBar percentage={uploadProgress}/>
      </div>
    )}
      
      {success && <div className='absolute top-[10px] right-[200px]'> <SucessPopup sucess={"Module created successfully"} />
      </div>}
      {error && 
      <div className='absolute top-[10px] right-[200px]'>
      <ErrorPopup error={error.response.data} />
      </div>}
     
      <div className='w-[90%] mt-3 flex flex-row items-center'>
        <p className='mr-4'>Module Order</p>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className='w-[100px] h-[32px] border border-gray-300 rounded-md outline-none p-2'
        >
          <option value="">Select order</option>
          {[...Array(10).keys()].map(num => (
            <option key={num + 1} value={num + 1}>{num + 1}</option>
          ))}
        </select>
      </div>
    
      <div className='w-[90%] mt-3 flex flex-row items-center'>
        <p>Module Name</p>
        <input
          type="text"
          placeholder='Enter module name'
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className='w-[300px] ml-4 h-[32px] border border-gray-300 rounded-md outline-none text-black bg-white p-2 shadow-sm'
        />
      </div>

      <div className='w-[90%] mt-3 flex flex-row items-center'>
        <p>Video</p>
        <input
          type="file"
          placeholder='Enter module name'

        
          onChange={(e) => setVideo(e.target.files[0])}
          className='w-[300px] ml-4 h-[32px] border border-gray-300 rounded-md outline-none text-black bg-white p-2 shadow-sm'
        />
      </div>
      <div className='w-[90%] mt-4'>
        <p className='mb-2'>Module Content</p>
        <ReactQuill
          formats={formats}
          modules={modules}
          value={moduleContent}
          onChange={setModuleContent}
          className='bg-white shadow-md rounded-md'
        />
      </div>
      <div
        className='w-[120px] rounded-md text-white items-center justify-center h-[50px] bg-blue-600 mt-4 flex flex-row cursor-pointer shadow-md hover:bg-blue-700 transition duration-200'
        onClick={handleSave}
      >
        Save
      </div>
    </div>
  );
}
