import React from 'react'
import { Bars, DNA, } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className=' ml-[20%]  flex-col w-[80%] flex items-center justify-center'>
<Bars
  height="80"
  width="80"
  color="black"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  <p className='text-md mt-3'>Loading</p>
  
    </div>
  )
}
