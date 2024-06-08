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
    <div className="ml-[21%] w-[80%] h-screen flex overflow-y-auto flex-row  shadow-lg rounded-md dark:bg-zinc-900">
      {courseDetail?.data &&
        <div className="w-[80%] overscroll-y-auto  h-screen  bg-white dark:bg-zinc-900 flex flex-col items-center justify-between p-6">
          <div className="h-[180px] py-4 pl-6 flex flex-col border-b-2 border-gray-300 dark:border-gray-700 w-full bg-slate-200 dark:bg-gray-800 rounded-md">
            <div className="w-full flex flex-row items-center">
              <p className="text-[22px] text-gray-800 dark:text-white font-bold">
                Module <span className="text-gray-400 ml-2 text-sm">({courseDetail?.data?.order})</span>
              </p>
              <p className="text-[20px] ml-1 text-zinc-800 dark:text-white font-bold">: {courseDetail?.data?.name}</p>
            </div>
            <p className="text-purple-700 font-bold text-sm">{courseData?.data?.name}</p>
          </div>
          <div className="w-full h-[400px] mt-4 bg-black rounded-md ">
            <video src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" controls className="w-full h-full"></video>
          </div>
          <ReactQuill
            value={courseDetail?.data?.content}
            readOnly={true}
            theme={"bubble"}
            className="dark:text-white text-black w-full dark:bg-zinc-900 mt-2 pb-2 rounded-md"
          />
          {
            isCompleted ?
              <div className="w-full h-[140px] flex flex-row items-center justify-end mt-4">
                <Button name={'completed'} />
                <AiFillCheckCircle color='green' size={58}/>
                     </div>
              :
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
        <div className="w-[80%] bg-white dark:bg-zinc-900 flex flex-col items-center justify-between p-6 shadow-lg rounded-md">
          <div className="w-full flex-col h-[400px] dark:text-white flex items-center justify-center">
            <IoMdLock size={100} color="gray" />
            <p>This Content is Locked !!</p>
            <p>{error?.response?.data?.error}</p>
          </div>
        </div>
      }
      {isLoading &&
        <div className="w-[80%] bg-white dark:bg-zinc-900 flex flex-col items-center justify-center p-6 shadow-lg rounded-md h-full">
          <Loading />
        </div>
      }
      <div className="w-[30%] sticky top-0 bg-white dark:bg-zinc-900 p-4 flex flex-col h-full shadow-lg rounded-md">
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
                <p className="text-gray-400 ml-2">({module?.order})</p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}
