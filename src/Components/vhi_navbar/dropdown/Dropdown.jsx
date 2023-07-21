import React, { useState } from 'react'
import './dropDown.css'
import { serviceDropdown } from '../navItems/NavItems'
import { Link } from 'react-router-dom'


function Dropdown() {
    const [dropdown, setDropdown] = useState(false);


    return (
        <ul className={dropdown ? 'services-submenu clicked' : 'services-submenu'} onClick={() => setDropdown(!dropdown)}>
            {serviceDropdown.map(item => {
                return (

                    <li key={item.id}>
                        <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>{item.title}</Link>
                    </li>

                )
            })}
        </ul>
    )
}

export default Dropdown