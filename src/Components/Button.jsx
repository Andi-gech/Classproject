import React from 'react'

export default function Button({name}) {
  return (
    <button  className=' px-3 mt-2 text-white w-[50%] rounded-md bg-blue-700 h-[50px]'>
        {name}
    </button>
  )
}
