import React, { useState, useEffect } from 'react';

export default function SucessPopup({ sucess }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sucess) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000); 

      
    }
  }, [sucess]);

  return (
    <div
      className={`w-[340px] z-50 px-5 h-[50px] bg-green-400 rounded-md absolute -bottom-[50px] right-0 transform transition-transform duration-300 ease-in-out flex items-center justify-center ${
        sucess ? 'translate-x-0 opacity-100' : 'translate-x-[20px] opacity-0'
      }`}
    >
      <p className='text-white line-clamp-2 text-[14px] font-bold'>{sucess}</p>
    </div>
  );
}
