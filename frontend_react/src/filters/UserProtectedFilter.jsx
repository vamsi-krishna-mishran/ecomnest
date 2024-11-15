import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectLoggedInUser } from '../components/auth/AuthSlice'
function UserProtectedFilter({ children })
{
    const loggedInUser = useSelector(selectLoggedInUser);

    if (loggedInUser?.isVerified)
    {
        return (
            <> {children}</ >
        )
    }
    //console.log("user protected filter")
    return <Navigate to={'/login'} replace={true} />
}

export default UserProtectedFilter