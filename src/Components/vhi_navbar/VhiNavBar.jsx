import React from 'react'
import { Link } from 'react-router-dom'
import './vhinavbar.css'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

function VhiNavBar() {
    return (
        <nav className='vhi__navbarContainer'>
            <Link><img src="" alt="LOGO WILL BE HERE" /></Link>
            <div className='middle__links'>
                <Link id='links' to={''}>Home</Link>
                <Link id='links' to={''}>Register vehicle</Link>
                <Link className='drop-dwn-lnk' id='links' to={''}><span>Renewal of plate</span><ArrowDropDownCircleIcon className='drop_down_link' /></Link>
                <Link id='links' to={''}>About</Link>
                <Link id='links' to={''}>Contact</Link>
            </div>
            <img src="" alt="USER PROFILE" />
        </nav>
    )
}

export default VhiNavBar