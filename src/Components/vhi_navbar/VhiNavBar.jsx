import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import IMAGES from '../../images/index.js';
import './vhinavbar.css'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { navItems } from "./navItems/NavItems.jsx"
import Dropdown from './dropdown/Dropdown.jsx';
import { NavLink } from 'react-router-dom';


function VhiNavBar() {
    const [dropdown, setDropdown] = useState(false);
  
    return (
        <>
            <nav className='vhi__navbarContainer'>
                <NavLink to='/UserPage' className='navbar-logo'>
                    <img className='vpr_logo_file' src={IMAGES.imgOne} alt="" />
                </NavLink>

                <ul className='nav-items'>
                    {navItems.map(item => {
                        if (item.id === 3) {
                            return (
                                <li
                                    key={item.id} 
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(true)} 
                                >

                                    <NavLink to={item.path} className="active-link"><span>{item.title}</span><ArrowDropDownCircleIcon className='drop-icon' /></NavLink>
                                    {dropdown && <Dropdown />}
                                </li>)
                        } else {
                            return (
                                <li key={item.id} className={item.cName}>
                                    <NavLink to={item.path} className="active-link">{item.title} </NavLink>
                                </li>
                            )
                        }
                    })}
                    
                </ul>
                

                {/* <p>Supposed userProfileIcon pending</p> */}


            </nav>

        </>
    );
}

export default VhiNavBar