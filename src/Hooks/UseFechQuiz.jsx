import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseFetchQuiz(id) {
    const authHeader = useAuthHeader()
    
    const Fetchcourse=()=>{

        return axios.get(`http://192.168.1.15:8080/api/exams/${id}`,{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['fechquiz',id],  queryFn: Fetchcourse , enabled: !!id, refetchOnWindowFocus: false})
 
}
