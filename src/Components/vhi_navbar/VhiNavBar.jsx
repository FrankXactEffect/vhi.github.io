import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IMAGES from '../../images/index.js';
import './vhinavbar.css'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { navItems } from "./navItems/NavItems.jsx"
import Dropdown from './dropdown/Dropdown.jsx';


function VhiNavBar() {
    const [dropdown, setDropdown] = useState(true);


    return (
        <>
            <nav className='vhi__navbarContainer'>
                <Link to={''} className='navbar-logo'>
                    <img className='vpr_logo_file' src={IMAGES.imgOne} alt="" />
                </Link>

                <ul className='nav-items'>
                    {navItems.map(item => {
                        if (item.id === 3) {
                            return (
                                <li
                                    key={item.id}
                                    className={item.cName}
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)}
                                >

                                    <Link to={item.path}><span>{item.title}</span><ArrowDropDownCircleIcon className='drop-icon' /></Link>
                                    {dropdown && <Dropdown />}
                                </li>)
                        } else {
                            return (
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path}>{item.title}</Link>
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