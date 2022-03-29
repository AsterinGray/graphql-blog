import React from 'react'
import { Route, Routes } from 'react-router'

import Posts from './pages/Posts'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'

const Router = () => (
    <Routes>
        <Route path={'/'} element={<Posts/>} />
        <Route path={'/signup'} element={<SignUp/>}/>
        <Route path={'/signin'} element={<SignIn/>}/>
        <Route path={'/profile'} element={<Profile/>} />
    </Routes>
)

export default Router
