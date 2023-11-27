import React from 'react'
import MainNavbar from '../Navigation/MainNavbar'
import { Route, Routes } from 'react-router-dom'

import JobPage from '../JobsPage/Jobpage';
import Jobpostingform from '../Jobpostingform/Jobpostingform';
import JobApplyform from '../JobApplyform/JobApplyform';
import Login from '../LoginSignup/Login';
import Signup from '../LoginSignup/Signup'


const MainLayout = () => {
  return (
    <div>
      <MainNavbar />
      <Routes>
        <Route path='/' element={<JobPage />} />
        <Route path='/jobpost' element={<Jobpostingform />} />
        <Route path='/Login' element={<Login/>}/>
        <Route path='/applyjob' element={<JobApplyform />} />
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='Jobpostingform' element={<Jobpostingform/>}/>
      </Routes>
    </div>
  )
}

export default MainLayout
