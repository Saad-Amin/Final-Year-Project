import React from 'react'
import './main-layout.scss'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import TopNav from '../components/topnav/TopNav'

const MainLayout = () => {
    const isAuth = localStorage.getItem('usersdatatoken');
    return (
        isAuth ?
        <>
            <Sidebar />
            <div className="main">
                <div className="main__content">
                    <TopNav />
                    <Outlet />
                </div>
            </div>
        </>
        :
        <Navigate to={"/"} />
    )
}

export default MainLayout
