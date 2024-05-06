import React from 'react'
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.bubble.css'
import { Link, useParams } from 'react-router-dom';
import { IoMdLock } from "react-icons/io";

export default function Lesson() {
  const data=`<h1><strong>Image Segmentation with OpenCV</strong></h1><h2><br></h2><h2><strong>What is Image Segmentation?</strong></h2><p><br></p><p><span style="background-color: rgb(243, 243, 243); font-size: 14px; color: rgb(17, 17, 17);">Image segmentation is the process of dividing an image into multiple segments or regions based on certain criteria. These segments can represent objects, boundaries, or other meaningful parts of the image.</span></p><h2><br></h2><h2><strong>Basic Steps for Image Segmentation:</strong></h2><h2>1.<strong style="background-color: rgb(243, 243, 243); font-size: 14px; color: rgb(17, 17, 17);">Preprocessing</strong><span style="background-color: rgb(243, 243, 243); font-size: 14px; color: rgb(17, 17, 17);">:</span></h2><ul><li>Convert the image to grayscale (if it’s not already).</li><li>Apply any necessary filters (e.g., Gaussian blur) to reduce noise.</li></ul><h2> 2.<strong style="background-color: rgb(243, 243, 243); font-size: 14px; color: rgb(17, 17, 17);">Thresholding</strong></h2><ul><li>Set a threshold value to separate foreground and background pixels.</li><li>Pixels above the threshold are considered part of the object (foreground), while those below are considered background.</li></ul><h2> 3.<strong style="background-color: rgb(243, 243, 243); font-size: 14px; color: rgb(17, 17, 17);">Contour Detection</strong><span style="background-color: rgb(243, 243, 243); font-size: 14px; color: rgb(17, 17, 17);">:</span></h2><ul><li>Find contours (boundaries) of connected components in the thresholded image.</li><li>Contours represent the edges of objects.</li></ul><h2> 4.<strong style="background-color: rgb(243, 243, 243); font-size: 14px; color: rgb(17, 17, 17);">Post-processing</strong></h2><ul><li>Clean up the detected contours (e.g., remove small or noisy contours).</li><li><span style="background-color: rgb(243, 243, 243); font-size: 14px; color: rgb(17, 17, 17);">Optionally, fill the contours to create masks</span></li></ul><h2><br></h2><h2><strong>Example Code (Python + OpenCV):</strong></h2><pre class="ql-syntax" spellcheck="false">import cv2
import numpy as np


# Load an image (replace 'image_path.jpg' with your image file)
image_path = 'image_path.jpg'
image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)


# Apply Gaussian blur to reduce noise
blurred = cv2.GaussianBlur(image, (5, 5), 0)


# Thresholding (adjust the threshold value as needed)
_, thresholded = cv2.threshold(blurred, 100, 255, cv2.THRESH_BINARY)


# Find contours
contours, _ = cv2.findContours(thresholded, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)


# Draw contours on the original image
result = cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)
cv2.drawContours(result, contours, -1, (0, 255, 0), 2)


# Display the result
cv2.imshow('Segmented Image', result)
cv2.waitKey(0)
cv2.destroyAllWindows()


</pre><p><br></p><h2><br></h2>` 
const modules=[
  {
    id:'1',
    title:'Image Segmentation with OpenCV',
    locked:false
  }
  ,
  {
    id:'2',
    title:'What is Image Segmentation?',
    locked:true
  },
  {
    id:'3',
    title:'Basic Steps for Image Segmentation:',
    locked:true
  },
  {
    id:'4',
    title:'1. Preprocessing:',
    locked:true
  }
  ,
  {
    id:'5',
    title:'2. Thresholding',
    locked:true
  }
  ,
  {
    id:'6',
    title:'3. Contour Detection',
    locked:true
  }

]

const {id}=useParams()
const current=modules.filter((module)=>module.id==id)
 return (
    <div className='ml-[21%] w-[80%] h-screen  flex flex-row '>
    <div className='w-[80%]   p-3  h-ful{modules[id]l'>
      <div className=' w-full  h-[70px] rounded-md bg-purple-600 items-center flex justify-center text-white'>
        <p className='font-bold  text-[22px] '>Module {id}: {current[0].title}</p>
      </div>
      {!current[0].locked&&
      <><iframe  className='w-full h-[400px] mt-3'
      src="http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1">
      </iframe>
      <ReactQuill  value={data}
         readOnly={true}
         theme={"bubble"}
         
         className='bg-white dark:text-white dark:bg-zinc-900 m-0 p-0' />
         <div className=' w-full h-[100px]   -mt-9 flex justify-center items-center'>
         <Link  to={`/quiz/${id}`}  className='w-[150px] h-[50px] bg-purple-700 rounded-full flex items-center justify-center'>
          <p className='text-white'>Go To Quiz</p>
         </Link  >
         </div></>}
         {
          current[0].locked&&
          <div className='w-full flex-col h-[400px] dark:text-white flex items-center justify-center  '>
            <IoMdLock size={100} color='gray'/>
            <p>This Content is locked !!</p>
            <p>Please Complete The Previouse Lesson</p>
           

            </div>
         }
      

    </div>
    <div className='w-[30%] bg-white dark:bg-zinc-800 p-4 flex flex-col  h-full'>
      <p className='font-bold  dark:text-white mr-6 text-[22px]'>Modules</p>
      <div className='w-full  flex-1 rounded-md  p-2 '>
        {
          modules.map(({id:Ss,title,locked})=>{
            return(
            <Link  to={{pathname:`/courseName/courseModule/${Ss}`,state:{title: title}}}     className={`w-full  dark:text-white cursor-pointer  ${Ss===id?'bg-purple-600  text-white':'text-black'} hover:bg-purple-600 hover:text-white h-[40px] flex items-center shadow-sm   justify-between  rounded-md dark:shadow-gray-600 shadow-gray-200 mt-2 `}>
            <p className=' font-normal line-clamp-1'>{title}</p>
            {locked &&<IoMdLock/>}
            
           
            </Link>
            )
          })
        }
     
  
 
      </div>
    </div>
    </div>
  )
}
