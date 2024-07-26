import React from 'react'
import {ColorRing } from 'react-loader-spinner'

export default function Loading() {
  return (
    <div className=' ml-[20%]   flex-col w-[80%] flex items-center justify-center'>

<ColorRing
  visible={true}
  height="40"
  width="40"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['blue','blue','blue','blue','blue','blue','blue']}
  />
  <p className='text-md mt-3'>Loading</p>
  
    </div>
  )
}
