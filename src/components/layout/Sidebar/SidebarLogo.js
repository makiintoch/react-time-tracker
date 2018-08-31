import React from 'react'
import {Link} from 'react-router-dom'
import './SidebarLogo.css'

const SidebarLogo = () => {
    return (
        <div className={'sidebar__logo'}>
            <Link to={'/tasks'}>Logotype</Link>
        </div>
    )
}

export default SidebarLogo