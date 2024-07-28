import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchAllEnrolles() {
    const authHeader = useAuthHeader()

    const Fetchcourse=()=>{

        return axios.get('http://localhost:8080/api/enroll',{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['fetchAllEnrolles'], queryFn: Fetchcourse })
 
}
