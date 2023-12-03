import React from 'react'
import MainNavbar from '../Navigation/MainNavbar'
import { Route, Routes } from 'react-router-dom'

import JobPage from '../JobsPage/Jobpage';
import Jobpostingform from '../Jobpostingform/Jobpostingform';
import JobApplyform from '../JobApplyform/JobApplyform';
import Login from '../LoginSignup/Login';
import Signup from '../LoginSignup/Signup'
import Dashboard from '../Dashboard/Dashboard';
import QusAndAnsPage from '../Qus_and_AnsPage/Qus_and_AnsPage';


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
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/qpage' element={<QusAndAnsPage />} />
      </Routes>
    </div>
  )
}
export default MainLayout
