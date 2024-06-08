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
import Admin from './Pages/Admin';
import CreateModule from './Pages/CreateModule';
import CreateCatagory from './Pages/CreateCatagory';
import CreateExam from './Pages/CreateExam';
import AdminCourse from './Pages/AdminCourse';
import AdminCourseDetail from './Pages/AdminCourseDetail';




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
      <Route path="/CourseModule" element={<RequireAuth fallbackPath='/login'>
       
      </RequireAuth>} />
      <Route path="/createcatagory" element={<RequireAuth fallbackPath='/login'><CreateCatagory/></RequireAuth>} />
      <Route path="/learn/:courseid" element={<RequireAuth fallbackPath='/login'><Lesson/></RequireAuth>} />
      <Route path="/takeexam/:examid" element={<RequireAuth fallbackPath='/login'><Exam/></RequireAuth>} />
      <Route path="/EnrolledCourse" element={<RequireAuth fallbackPath='/login'><EnrolledCouse/></RequireAuth>} />
<Route path="/enroll/:courseid" element={<RequireAuth fallbackPath='/login'><EnrollPage/></RequireAuth>} />
   <Route path="/login" element={<Login/>} />
   <Route path='/signup' element={<Signup/>} />
   <Route path='Adminstrator/MyCourse/add' element={<Admin/>} />
 
   <Route path='Adminstrator/MyCourse' element={<AdminCourse/>} />
<Route path='Adminstrator/MyCourse/:courseid' element={<AdminCourseDetail/>} />
<Route path='Adminstrator/MyCourse/:courseid/AddModule' element={ <CreateModule/>} />
<Route path='Adminstrator/MyCourse/:courseid/:mid/addexam' element={ <CreateExam/>} />
  
    </Routes>

 
    </div>
 
  )
}

export default App
