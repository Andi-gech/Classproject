import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Notification from './Pages/Notification';
import Lesson from './Pages/Lesson';
import Exam from './Pages/Exam';
import EnrolledCourse from './Pages/EnrolledCouse';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import RequireAuth from '@auth-kit/react-router/RequireAuth';
import Header from './Pages/Header';
import EnrollPage from './Pages/EnrollPage';
import Admin from './Pages/Admin';
import CreateModule from './Pages/CreateModule';
import CreateCategory from './Pages/CreateCatagory';
import CreateExam from './Pages/CreateExam';
import AdminCourse from './Pages/AdminCourse';
import AdminCourseDetail from './Pages/AdminCourseDetail';
import AdminHeader from './Components/AdminHeader';
import RoleAuthentication from './Components/RoleAuthentication';
import ErrorPage from './Pages/ErrorPage';
import notFound from './assets/404.png'

function App() {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const hideHeaderRoutes = ['/login', '/signup'];

  useEffect(() => {
    if (hideHeaderRoutes.includes(location.pathname)) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
  }, [location.pathname]);

  return (
    <div className='w-full font-j dark:bg-black    overflow-hidden bg-slate-50  flex-1 overflow-y-auto flex'>
      <Routes>
        <Route path="/" element={<RequireAuth fallbackPath='/login'><RoleAuthentication allowedRoles={['student']} children={<><Header /><Home /></>} /></RequireAuth>} />
        <Route path="/Notification" element={<RequireAuth fallbackPath='/login'>
          <RoleAuthentication allowedRoles={['student']} children={<><Header /><Notification /></>}/></RequireAuth>} />
        <Route path="/Lesson" element={<RequireAuth fallbackPath='/login'><RoleAuthentication allowedRoles={['student']} children={<><Header /><Lesson /></>} /></RequireAuth>} />
        <Route path="/Adminstrator/Createcatagory" element={<RequireAuth fallbackPath='/login'><RoleAuthentication allowedRoles={['admin']} children={<><AdminHeader /><CreateCategory /></>} /></RequireAuth>} />
        <Route path="/learn/:courseid" element={<RequireAuth fallbackPath='/login'><RoleAuthentication allowedRoles={['student']} children={<><Header /><Lesson /></>} /></RequireAuth>} />
        <Route path="/takeexam/:examid" element={<RequireAuth fallbackPath='/login'><RoleAuthentication allowedRoles={['student']} children={<><Header /><Exam /></>} /></RequireAuth>} />
        <Route path="/courses" element={<RequireAuth fallbackPath='/login'><RoleAuthentication allowedRoles={['student']} children={<><Header /><EnrolledCourse /></>}/></RequireAuth>} />
        <Route path="/enroll/:courseid" element={<RequireAuth fallbackPath='/login'><RoleAuthentication allowedRoles={['student']} children={<><Header /><EnrollPage /></>}/></RequireAuth>} />
        <Route path='/Achievment' element={<RequireAuth fallbackPath='/login'><RoleAuthentication allowedRoles={['student']} children={<><Header /><Notification /></>} /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="Adminstrator/MyCourse/add" element={<RequireAuth fallbackPath='/login'><RoleAuthentication allowedRoles={['teacher']} children={<><AdminHeader /><Admin /></>} /></RequireAuth>} />
        
        <Route path="Adminstrator/MyCourse" element={<RequireAuth fallbackPath='/login'> <RoleAuthentication allowedRoles={['teacher']} children={<><AdminHeader /><AdminCourse /></>}/></RequireAuth>} />
        <Route path="Adminstrator/MyCourse/:courseid" element={<RequireAuth fallbackPath='/login'><RoleAuthentication allowedRoles={['teacher']} children={<><AdminHeader /><AdminCourseDetail /></>}/></RequireAuth>} />
        <Route path="Adminstrator/MyCourse/:courseid/AddModule" element={<RequireAuth fallbackPath='/login'><RoleAuthentication allowedRoles={['teacher']} children={<><AdminHeader /><CreateModule /></>}/></RequireAuth>} />
        <Route path="Adminstrator/MyCourse/:courseid/:mid/addexam" element={<RequireAuth fallbackPath='/login'>
          <RoleAuthentication allowedRoles={['teacher']} children={<><AdminHeader /><CreateExam /></>}/></RequireAuth>} />
        <Route path='*' element={<ErrorPage error="Page Not Found" symbol={notFound}/>} />
         
      </Routes>
    </div>
  );
}

export default App;
