import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';

import Notification from './Pages/Notification';
import Lesson from './Pages/Lesson';
import Exam from './Pages/Exam';
import EnrolledCouse from './Pages/EnrolledCouse';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import RequireAuth from '@auth-kit/react-router/RequireAuth'
import Header from './Pages/Header';
import EnrollPage from './Pages/EnrollPage';




function App() {
  const location = useLocation()  
  const isloginorsignupPath = location.pathname === '/login' || location.pathname === '/signup'
 
   
  return (
    <div className=' w-full font-j  dark:bg-zinc-900 min-h-screen flex-1 overflow-y-auto  flex'>
   { !isloginorsignupPath&&  
 <Header/>
       }    <Routes>
      
   
      <Route path="/" element={<RequireAuth fallbackPath='/login' ><Home /></RequireAuth>} />
      <Route path="/Notification" element={<RequireAuth fallbackPath='/login'><Notification /></RequireAuth>} />
      <Route path="/Lesson" element={<RequireAuth fallbackPath='/login'><Lesson /></RequireAuth>} />
    
      <Route path="/courseName/courseModule/:id/:mid" element={<RequireAuth fallbackPath='/login'><Lesson/></RequireAuth>} />
      <Route path="/courseName/courseModule/:id/:mid/quiz/:examid" element={<RequireAuth fallbackPath='/login'><Exam/></RequireAuth>} />
      <Route path="/EnrolledCourse" element={<RequireAuth fallbackPath='/login'><EnrolledCouse/></RequireAuth>} />
<Route path="/enroll/:courseid" element={<RequireAuth fallbackPath='/login'><EnrollPage/></RequireAuth>} />
   <Route path="/login" element={<Login/>} />
   <Route path='/signup' element={<Signup/>} />


  
    </Routes>

 
    </div>
 
  )
}

export default App
