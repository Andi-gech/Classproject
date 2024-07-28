import React from 'react';
import UseFetchCompleted from '../Hooks/UseFetchCompleted';
import { AiFillTrophy, AiOutlineCheckCircle } from 'react-icons/ai';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

export default function Achievement() {
  const { data } = UseFetchCompleted();
  const authuser=useAuthUser() // Assuming this hook fetches data needed for the certificate

  return (
    <div className="ml-[18%] w-[82%] h-[100vh] flex-wrap px-4 bg-white dark:bg-slate-950 min-h-[99vh] flex flex-row py-5 overflow-auto">
        {data && data?.data?.map((item) => {
            return (
                <div className="relative shrink-0 mx-3 my-3 w-[450px] border-double p-[30px] h-[280px] rounded-md bg-white shadow-sm shadow-black">
                {/* Trophy icon */}
                <div className="w-full h-full absolute top-0 flex items-center justify-center right-0">
                  <AiFillTrophy size={200} className="text-8xl opacity-20 text-green-500 mx-4 mt-4" />
                </div>
                <div className='w-[430px] h-[255px] border-dashed absolute top-[10px] left-[10px] flex items-center justify-center  border-black border-2 border-spacing-2'></div>
                
        
                {/* Certificate content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6">
                  <h2 className="text-3xl font-bold ">Certificate of Achievement</h2>
                  <p className="text-2xl font-bold font-serif  mb-4">Dec Online Learning </p>
                  <p className="text-lg mb-8">Awarded to <span c lassName=' underline font-bold'>{authuser.name || 'Recipient Name'}</span> </p>
                  <p className="text-sm text-gray-600 mb-4 flex-wrap">For outstanding achievement in 
                  <span className='font-bold  mx-1'>{item.course.name}</span></p>
                  <p className='text-sm'>This Certeficate is issued for the dedication of thw student </p>
                  <div className="border-t border-gray-400 w-full mt-4 pt-4">
                    <p className="text-xs text-gray-500">Date: {data?.date || 'DD/MM/YYYY'}</p>
                  </div>
                </div>
              </div>
            )
        })}
     
      {
        

      }
    </div>
  );
}
