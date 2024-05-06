import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { MdErrorOutline } from 'react-icons/md'

export default function ErrorPage({error}) {
  return (
    <div className='ml-[20%] w-[80%] flex flex-col items-center justify-center  h-screen '>
        <MdErrorOutline size={90}/>
        <p>{error}</p>
    </div>
  )
}
