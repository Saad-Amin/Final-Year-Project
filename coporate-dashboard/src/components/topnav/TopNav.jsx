import React from 'react'
import './topnav.scss'
import UserInfo from '../user-info/UserInfo'
import { data } from '../../constants'
import { BiMenuAltRight } from 'react-icons/bi';

const TopNav = () => {
    const openSidebar = () => {
        document.body.classList.add('sidebar-open')
    }
    
    return (
        <div className='topnav'>
            <UserInfo user={data.user} />
            <div className="sidebar-toggle" onClick={openSidebar}>
                <BiMenuAltRight size={40} style={{color: '#FF265A'}}/>
            </div>
        </div>
    )
}

export default TopNav
