import React, { useEffect, useState } from 'react';
import UseFetchEachUser from '../Hooks/UseFechEachUser';
import { useNavigate, useParams } from 'react-router-dom';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { CgArrowLeft } from 'react-icons/cg';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

export default function Settings() {
  const { id } = useParams();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null); // State to hold selected image file
  const authUser = useAuthUser();
  const { data, refetch } = UseFetchEachUser(authUser?._id);
  const navigate = useNavigate();
  const authHeader = useAuthHeader();

  useEffect(() => {
    refetch();
  }, [authUser?._id, refetch]);

  const mutation = useMutation({
    mutationFn: async (updatedData) => {
      // Create form data to send with axios
      const formData = new FormData();
      
      if (updatedData.fullName) {
        formData.append('fullName', updatedData.fullName); // Append fullName if it's updated
      }
      if (updatedData.email) {
        formData.append('email', updatedData.email); // Append email if it's updated
      }
      if (updatedData.profilepic) {
        formData.append('profilepic', updatedData.profilepic); // Append image file if it's updated
      }

      // Send PUT request with form data
      await axios.put(`http://192.168.1.15:8080/api/user/update/me`, formData, {
        headers: {
          '_auth': authHeader, // Include auth headers if needed
          'Content-Type': 'multipart/form-data', // Specify content type for file upload
        },
      });
    },
    onSuccess: () => {
      refetch(); // Refetch data on success
    },
    onError: (error) => {
      console.log(error); // Log error if mutation fails
    },
  });

  const handleEdit = () => {
    const updatedData = {};

    if (fullName !== '') {
      updatedData.fullName = fullName; // Add fullName to updatedData if it's changed
    }
    if (email !== '') {
      updatedData.email = email; // Add email to updatedData if it's changed
    }
    if (image !== null) {
      updatedData.profilepic = image; // Add image file to updatedData if it's changed
    }

    mutation.mutate(updatedData); // Trigger the mutation with updatedData
  };

  return (
    <div className='w-full bg-white flex  justify-center dark:bg-slate-950 h-screen  '>
      <div className='w-[80%]  rounded-md flex flex-col'>
        <div className='relative w-full   border-b-2 border-gray-100 dark:border-gray-800 my-4 flex items-center self-start justify-self-start justify-center h-[100px]'>
          <p className='text-3xl dark:text-white font-bold'>Edit Profile</p>
          <div onClick={() => navigate(-1)} className='absolute flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm shadow-gray-400 rounded-full left-[60px] w-[40px] h-[40px]'>
            <CgArrowLeft className='dark:text-white text-black' size={30} />
          </div>
        </div>
        <div className='w-full flex flex-row'>
          <div className='w-[50%] mx-10'>
            <div className='w-[450px] h-[50px] flex flex-row items-center justify-between rounded-md p-2'>
              <p className='text-md font-bold  text-gray-800 dark:text-white'>Id</p>
              <p className='text-sm font-bold text-gray-500 rounded-md bg-gray-200 border-gray-300 p-2 border-[0.4px] min-w-[300px]'>{data?.data?._id}</p>
            </div>
            <div className='w-[450px] h-[50px] flex flex-row items-center justify-between rounded-md p-2'>
              <p className='text-md font-bold text-gray-800 dark:text-white'>User Name</p>
              <input type="text" placeholder={data?.data?.fullName} value={fullName} onChange={(e) => setFullName(e.target.value)} className='text-sm font-bold text-gray-500 rounded-md border-gray-300 p-2 border-[0.4px] min-w-[300px]' />
            </div>
            <div className='w-[450px] h-[50px] flex flex-row items-center justify-between rounded-md p-2'>
              <p className='text-md font-bold text-gray-800 dark:text-white'>Email</p>
              <input type='text' disabled value={email} onChange={(e) => setEmail(e.target.value)} placeholder={data?.data?.email} className='text-sm font-bold text-gray-500 rounded-md border-gray-300 p-2 border-[0.4px] min-w-[300px]' />
            </div>
            <div onClick={handleEdit} className='w-[450px] h-[100px] flex items-center justify-center'>
              <div className='text-sm font-bold text-white bg-blue-700 rounded-md p-2 px-[50px]'>Edit</div>
            </div>
          </div>
          <div className='w-[50%] flex-1 flex-col flex items-center justify-center'>
            <img
              src={image ? URL.createObjectURL(image) : (data?.data?.profilepic ? `http://192.168.1.15:8080/${data?.data?.profilepic}` : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")}
              className='w-[250px] shadow-md shadow-gray-400 h-[250px] object-cover'
              alt='Profile'
              onError={(e) => { console.log('Error loading image:', e.target.src); e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"; }}
            />
            <label htmlFor="doc">
              <div className='mt-5 h-[40px] px-5 mb-5 hover:bg-blue-800 cursor-pointer bg-blue-600 flex items-center justify-center rounded-md'>
                <p className='text-white'>Upload New Pic</p>
                <AiOutlineCloudUpload size={22} className='text-white mx-2' />
              </div>
              <input type="file" id="doc" name="doc" hidden onChange={(e) => setImage(e.target.files[0])} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
