import React, { useState } from 'react';
import axios from 'axios';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

export default function CreateCategory() {
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const authHeader = useAuthHeader();

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('name', categoryName);
        formData.append('description', description);
        formData.append('image', imageFile);

        try {
            const response = await axios.post(
                'http://localhost:8080/api/admin/createCatagory',
                formData,
                { headers: { '_auth': `${authHeader}`, 'Content-Type': 'multipart/form-data' } }
            );
            console.log('Category saved:', response.data);
            // Optionally, reset the form or give user feedback
            setCategoryName('');
            setDescription('');
            setImageFile(null);
        } catch (error) {
            console.error('Error saving category:', error);
            // Optionally, display an error message to the user
        }
    };

    return (
        <div className='ml-[20%] w-[80%]'>
            <div className='w-[90%] mt-3 flex flex-row'>
                <p>Category Name</p>
                <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    placeholder='Category Name'
                    className='w-[300px] ml-[30px] h-[32px] border-b-[1px] border-black outline-none text-black bg-transparent p-2'
                />
            </div>
            <div className='w-[90%] mt-[10px] flex flex-row'>
                <p>Category Image</p>
                <input
                    type='file'
                    onChange={(e) => setImageFile(e.target.files[0])}
                    className='w-[300px] ml-[30px] h-[32px] border-b-[1px] border-black outline-none text-black bg-transparent p-2'
                />
            </div>
            <div className='w-[90%] mt-[10px] flex flex-row'>
                <p>Category Description</p>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Category Description'
                    className='w-[300px] ml-[30px] h-[62px] border-[1px] border-black outline-none text-black bg-transparent p-2'
                />
            </div>
            <div onClick={handleSave} className='w-[100px] h-[50px] flex items-center justify-center bg-black rounded-md mt-[20px] cursor-pointer'>
                <p className='text-white text-center'>Create</p>
            </div>
        </div>
    );
}
