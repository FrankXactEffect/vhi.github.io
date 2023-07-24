import React from 'react'
import './homeNavCom.css'
import { Link } from 'react-router-dom'
import IMAGES from '../../../images/index.js';


function HomeNavCom() {
    return (
        <nav className='homeNavComponent_Container'>
            <Link className='navLogo'>
                <img src={IMAGES.imgOne} alt="#" />
            </Link>
            <div className='nav-middle-links'>
                <Link>About</Link>
                <Link>FAQ</Link>
                <Link>Contact</Link>
            </div>
            <div className='navButtons'>


                <Link to={'VhiLogin'} className='loginlink'>
                    <button className='navlogin' type='submit'> LOGIN</button>
                </Link>

                <Link >
                    <button className='navregister' type='submit'>REGISTER</button>
                </Link>
            </div>
        </nav>
    )
}

export default HomeNavCom