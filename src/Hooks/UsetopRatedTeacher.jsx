import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader'

export default function UseTopratedUser()  {
    const authHeader = useAuthHeader()
    
    const Fetchcourse=()=>{

        return axios.get(`http://192.168.1.15:8080/api/user/teacher`,{headers:{'_auth':`${authHeader}`}})
    }
  
    return useQuery({ queryKey: ['TopRated'],  queryFn: Fetchcourse })
 
}
