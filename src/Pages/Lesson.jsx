import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoMdLock } from "react-icons/io";
import UseFetchEachCourse from '../Hooks/UseFetchAllModules';
import Loading from './Loading';
import axios from 'axios';
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import UseFetchQuizByModule from '../Hooks/UseFechquizByModule';
import UseFetchModuleContent from '../Hooks/UseFetchModuleContent';
import UseFetchSingleCourse from '../Hooks/UseFetchSingleCourse';
import UseFetchSingleEnrollCourse from '../Hooks/UseFechSingleEnrollCourse';
import Button from '../Components/Button';
import { AiFillCheckCircle } from 'react-icons/ai';
import ErrorPage from './ErrorPage';

export default function Lesson() {
  const [selectedModule, setSelectedModule] = useState(null);
  const { courseid } = useParams();
  const { data: courseData } = UseFetchSingleCourse(courseid);
  const { data: courseDetail, isLoading, refetch, isFetching, error, isError } = UseFetchModuleContent(selectedModule || courseData?.data?.coursemodules[0]?._id);
  const { data: exam, refetch: refetchExam } = UseFetchQuizByModule(selectedModule || courseData?.data?.coursemodules[0]?._id);

  useEffect(() => {
    refetch();
    refetchExam();
  }, [selectedModule]);

  const { data: enroll, refetch: refetchEnroll } = UseFetchSingleEnrollCourse(courseid);
  const authHeader = useAuthHeader();


  const handleComplete = async () => {
    const requestBody = {
      moduleid: selectedModule || courseData?.data?.coursemodules[0]?._id
    };
    try {
      const result = await axios.put(`http://localhost:8080/api/enroll/${courseid}/completemodule`, requestBody, {
        headers: {
          '_auth': authHeader
        },
      });
      alert("course Sucess fully completed"
      )
      refetchEnroll();
    } catch (error) {
      console.log(error.response);
    }
  };

  const isCompleted = enroll?.data?.completedModules?.some(module => module.id === (selectedModule || courseData?.data?.coursemodules[0]?._id));
 
  return (
    <div className="ml-[18%] relative items-center w-[100%] min-h-screen  flex   flex-row   bg-white rounded-md ">
      {courseDetail?.data &&
        <div className="w-[75%]     dark:bg-zinc-900 flex flex-col items-center justify-between p-6">
          <div className="h-[150px]   pl-6 flex flex-col border-b-2  dark:border-gray-700 w-full  dark:bg-gray-800 rounded-md">
            <div className="w-full pt-4 flex flex-row items-center">
              <p className="text-[27px] text-gray-800 dark:text-white font-bold">
                Module <span className="text-gray-400 ml-2 text-sm">({courseDetail?.data?.order})</span>
              </p>
              <p className="text-[27px] ml-1 text-zinc-800 dark:text-white font-bold">: {courseDetail?.data?.name}</p>
            </div>
            <p className="text-blue-700 font-bold text-[18px]">{courseData?.data?.name}</p>
          </div>
          <div className="w-full h-[400px] mt-4 bg-black rounded-md ">
            <div className="w-full h-full">
              <iframe
                title={courseDetail?.data?.name}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${courseDetail?.data?.link || 'dQw4w9WgXcQ'}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <ReactQuill
            value={courseDetail?.data?.content}
            readOnly={true}
            theme={"bubble"}
            className="dark:text-white text-black w-full dark:bg-zinc-900 mt-2 pb-2 rounded-md"
          />
          {
            !isCompleted &&
              <>
                {exam?.data?.exams[0] ?
                  <>
                    {exam?.data?.passed ?
                      <div className="w-full h-[140px] flex flex-row items-center justify-end mt-4" onClick={handleComplete}>
                        <Button name={'Complete'} />
                      </div>
                      :
                      <Link to={`/takeexam/${exam?.data?.exams[0]?._id}`} className="w-full h-[140px] flex flex-row items-center justify-end mt-4">
                        <Button name={'Go to Exam'} />
                      </Link>
                    }
                  </>
                  :
                  <div onClick={handleComplete} className="w-full h-[140px] flex flex-row items-center justify-end mt-4">
                    <Button name={'Complete'} />
                  </div>
                }
              </>
          }
        </div>
      }
      {isError &&
      <>
      {error?.response.status===401?<ErrorPage error={error?.response?.data?.message} symbol={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} />:
      <ErrorPage error={error?.response?.data} />}
      
      </>
      }
      {isLoading &&
        <div className="w-[80%] bg-white dark:bg-zinc-900 flex flex-col items-center justify-center p-6 shadow-lg rounded-md h-full">
          <Loading />
        </div>
      }
      <div className="w-[20%]  fixed right-0 top-0 bg-white dark:bg-zinc-900 p-4 flex flex-col h-full shadow-lg rounded-md">
        <p className="font-bold dark:text-white text-[22px] mb-4">Modules</p>
        <div className="w-full flex-1 rounded-md p-2 overflow-y-auto">
          {
            courseData?.data?.coursemodules?.map((module) => (
              <Link
                onClick={() => setSelectedModule(module._id)}
                className={`w-full ${selectedModule === module._id ? 'bg-purple-100' : 'bg-white dark:bg-gray-900'} flex flex-row items-center justify-between h-[50px] border-b-2 border-gray-100 dark:text-white cursor-pointer px-4 py-2 rounded-md`}
                key={module._id}
              >
                <p className="line-clamp-1 font-semibold">{module?.name}</p>
                <div className='flex flex-row'>
                <p className="text-gray-400 ml-2">({module?.order})</p>
                
                {enroll?.data?.completedModules?.some((completedModule) => completedModule.id === module._id) && (
                  <AiFillCheckCircle size={15} color="blue" />
                )}
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}
