import { useState } from 'react'
import { useSelector } from 'react-redux'

import './App.css'
import { Routes, Route } from 'react-router-dom'

import UserProtectedFilter from './filters/UserProtectedFilter'

import { SignUpRoute, LoginRoute, HomeRoute, NotFoundRoute } from './routes'
import { selectIsAuthChecked, selectLoggedInUser } from './components/auth/AuthSlice'
import { useAuthCheck, useFetchLoggedInUserDetails } from './components/hooks'

function App()
{
  const isAuthChecked = useSelector(selectIsAuthChecked)
  const loggedInUser = useSelector(selectLoggedInUser)

  useAuthCheck();
  useFetchLoggedInUserDetails(loggedInUser);

  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpRoute />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path='/' element={
          <UserProtectedFilter>
            <HomeRoute />
          </UserProtectedFilter>} />
        <Route path='*' element={<NotFoundRoute />} />
      </Routes>
      {/* <small>hi erro</small> */}
    </>
  )

}



export default App
