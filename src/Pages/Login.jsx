import React from 'react'
import { Link, Navigate, Router, redirect} from 'react-router-dom'
import image from '../assets/curvestyle.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import ErrorPopup from '../Components/ErrorPopup';
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
      setError(err.response.data);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
  <div className='bg-white flex-col  w-screen h-screen flex items-center justify-center'>
    <div className=' overflow-hidden  bg-white items-center flex-col shadow-sm w-[400px] flex rounded-[3%] h-[500px]  shadow-gray-500'>
<div className=' relative w-full h-[50px] flex items-center justify-center'>
  <p className='font-bold text-center text-[25px]'>Login</p>
  
<ErrorPopup error={error}/>
</div>

<div className='w-[90%] relative h-[70px] mt-[50px] '>
          <p className='  text-sm z-10 bg-white  dark:bg-zinc-900 px-2 py-2 dark:text-white'>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className='w-full  bg-white dark:bg-zinc-800 outline-purple-500 -z-10 h-[45px] border-gray-400 rounded-md border-none shadow-sm shadow-gray-400'/>
        </div> 
        <div className='w-[90%] relative h-[70px] mt-4 '>
          <p className='  text-sm z-10 bg-white  dark:bg-zinc-900 px-2 py-2 dark:text-white'>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} type='password' className='w-full  bg-white dark:bg-zinc-800 outline-purple-500 -z-10 h-[45px] border-gray-400 rounded-md border-none shadow-sm shadow-gray-400'/>
        </div> 
        <div onClick={handleLogin} className='w-[80%] mt-[50px] cursor-pointer hover:bg-zinc-700 rounded-md h-[50px] flex items-center justify-center bg-black'>
          <p className='text-white font-bold'>Login</p>
        </div>
        <div className='w-full  px-3 h-[50px] justify-center mt-7 flex flex-col  '>
        <p className='mt-[5px]  text-[14px] font-medium'>if You have no acccount <Link  to={'/signup'} className=' text-blue-600 underline  cursor-pointer'>Sign in</Link ></p>
     <p className=' text-blue-600  text-[14px]  cursor-pointer'> Forget Your Password</p>
        </div>
        
      
    </div>
  </div>
  )
}
