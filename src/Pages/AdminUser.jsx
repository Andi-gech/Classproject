import React from 'react'
import UseFetchAllUser from '../Hooks/UseFetchAllUser'
import { useNavigate } from 'react-router-dom'
import { useMutation,useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'

export default function AdminUser() {
    const {data}=UseFetchAllUser()
    const navigate = useNavigate()
    const queryClient=useQueryClient()
    const mutation=useMutation({
       mutationFn: (id)=>axios.delete(`http://localhost:8080/api/user/${id}`),
mutationKey:['deleteuser'],
onSuccess:()=>{
    console.log('deleted')
    queryClient.invalidateQueries({queryKey:['FetchAlluser']})

},


onError:()=>{
console.log('not deleted')
}
    }

    )

    
  return (
    <div className='w-[82%]   h-[100vh] overflow-y-hidden dark:bg-gray-900 bg-white ml-[18%]'>
        <div className='w-[70%] overflow-x-hidden p-[20px]   '>
      

<div class="relative  overflow-x-hidden shadow-md sm:rounded-lg">
<div className='w-full flex items-center justify-start mx-5 h-[50px]'>
    <p className=' font-bold text-lg'>Active User List</p>

    {
                    mutation.isPending &&<div>
            <ColorRing
  visible={true}
  height="40"
  width="40"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['blue','blue','blue','blue','blue','blue','blue']}
  />
                    </div>
                }
             

</div>
   

<div class="relative h-[400px] overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Role
                </th>
                <th scope="col" class="px-6 py-3">
                   <span class="sr-only">edit</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">delete</span>
                    
                </th>
            </tr>
        </thead>
        
        {data?.data?.map(user=>
        {
          return(
            <tbody>
              
                
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user.fullName}
                    </th>
                    <td class="px-6 py-4">
                        {user.email}
                    </td>
                    <td class="px-6 py-4">
                        {user.role}
                    </td>
                    <td class="px-6 py-4">
                      <p onClick={()=>navigate(`/Adminstrator/User/${user._id}`)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</p>
                    </td>
                    <td class="px-6 py-4  text-right">
                        <p onClick={()=>mutation.mutate(user._id)} class="  cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">delete</p>
                    </td>
                    
                </tr>
                
            </tbody>)
        })}
    </table>
</div>

 
</div>

        </div>
        

        
    </div>
  )
}
