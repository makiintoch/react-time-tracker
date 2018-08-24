import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = props => {
    return (
        <div className={'sidebar'}>
            <ul>
                <li><NavLink to={'/'} activeClassName={'active'}>Time Tracker</NavLink></li>
                <li><NavLink to={'/reports'} activeClassName={'active'}>Reports</NavLink></li>
            </ul>
        </div>
    );
}

export default Sidebar;