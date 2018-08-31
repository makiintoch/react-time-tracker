import React from 'react';
import SidebarMenu from './SidebarMenu';
import SidebarLogo from './SidebarLogo';
import './index.css';

const Sidebar = props => {
    return (
        <div className={'sidebar'}>
            <SidebarLogo />
            <SidebarMenu />
        </div>
    );
}

export default Sidebar;