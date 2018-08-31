import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarMenu.css';

const SidebarMenu = () => {
    return (
        <div className={'sidebar__menu'}>
            <NavLink to={'/tasks'} className={'sidebar__menu-link'} activeClassName={'sidebar__menu-link_active'}>Tasks</NavLink>
            <NavLink to={'/reports'} className={'sidebar__menu-link'} activeClassName={'sidebar__menu-link_active'}>Reports</NavLink>
        </div>
    );
}

export default SidebarMenu;