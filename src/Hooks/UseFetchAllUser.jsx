import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchAllUser() {
    const authHeader = useAuthHeader()
    
    const Fetchcourse=()=>{

        return axios.get(`http://localhost:8080/api/user/all`,{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['FetchAlluser'], queryFn: Fetchcourse ,})
 
}
