import React from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import ErrorPage from '../Pages/ErrorPage'
import erro from '../assets/403.png'
export default function RoleAuthentication({allowedRoles,children}) {
    const user=useAuthUser()
    if(!allowedRoles.includes(user?.role)){

        return <ErrorPage error="Unauthorized Access" symbol={erro}/>
    }

    return children

 
}
