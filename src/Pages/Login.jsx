import React from 'react'
import { Link, Navigate, Router, redirect} from 'react-router-dom'
import image from '../assets/curvestyle.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
export default function Login({props}) {
  const [Email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
const [error, setError] = React.useState(null)
  const signIn = useSignIn()
  const navigate = useNavigate()
  const auth = useAuthUser()
  
  const handleLogin = async () => {
    try {
      const result = await axios.post('http://localhost:8080/api/user/Auth', { email:Email, password });
      if (result.status === 200) {
        signIn({
          auth: {
            token: result.data.token,
            type: 'Bearer'
          },
          userState: {
            email:Email,
            name: 'React User',
            uid: 123456
          }
        });
        navigate('/');
      } else {
        setError('Failed to sign in.');
      }
    } catch (err) {
      console.log(err);
      setError(err?.response?.data);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <div className='w-full h-screen  flex items-center justify-center'>
      <img src={image} className='w-full h-full fixed -z-10  bottom-0  right-0 '/>
     
      <div className='w-[400px] rounded-md border-gray-100 h-[400px]  border-2 flex flex-col'>
        <div className='w-full h-[50px] flex items-center justify-center font-bold'><p className=' font-bold text-2xl font-serif'>Login</p></div>
      <div className='w-full   pt-3  h-[350px] flex-col flex items-center justify-start'>
      <div className='w-[90%] relative h-[70px] mt-4 '>
          <p className='  text-sm z-10 bg-white px-2 py-2'>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className='w-full  bg-gray-100 outline-purple-200 -z-10 h-[45px] rounded-md border-2'/>
        </div> 
        
        <div className='w-[90%] relative h-[70px] mt-4 '>
          <p className='  text-sm z-10 bg-white px-2 py-2'>Password</p>
          <input  onChange={(e) => setPassword(e.target.value)} type="password" className='w-full  bg-gray-100 outline-purple-200 -z-10 h-[45px] rounded-md border-2'/>
        </div>  
       {error&& <p className='w-[90%] text-sm mt-4 text-red-400'>{error}</p>}
        <div onClick={handleLogin} className='w-[100px] h-[50px] shrink-0 hover:bg-purple-800 cursor-pointer bg-purple-500 rounded-md mt-[30px] flex items-center justify-center'>
          <p className=' text-white font-bold'>Login</p>
        </div>
        <div className='w-full flex flex-row px-4 mt-3 '>
          <p className=' text-sm mt-4'>Don't have an account?</p>
          <Link to={'/signup'} className=' text-sm mt-4 text-blue-500 ml-2'>Register</Link >
        </div>
        
        </div>
      </div>
    </div>
  )
}
