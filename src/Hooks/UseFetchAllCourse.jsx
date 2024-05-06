import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchAllCourse() {
    const authHeader = useAuthHeader()
    console.log(authHeader)
    const Fetchcourse=()=>{

        return axios.get('http://localhost:8080/api/courses',{headers:{'x-auth-token':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['courses'], queryFn: Fetchcourse })
 
}
