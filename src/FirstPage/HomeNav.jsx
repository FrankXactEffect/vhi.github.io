import React from 'react'
import './HomeNav.css'
import {Link} from 'react-router-dom'
import Logo from '../images/Logo.png'



const HomeNav = () => {
  return (
    <div>
        <nav className='Navbar'>

            <div >
                <Link to='/'>
                <img className='logo1' src={Logo} alt="" />
                </Link>
            
            </div>

                        <div className='Links'>
                            <Link to='/About' id='links'>About</Link>
                            <Link to='/Faq' id='links'>FAQ</Link>
                            <Link to='/Contact' id='links'>Contact</Link>
                        </div>

                             <div className='Side-Btn'>
                                
                                    <Link to="/Login">
                                        <button className='Login'>Login</button>
                                    </Link>
                                    
                                        <Link to="/Registration">
                                            <button className='Register'>Register</button>
                                        </Link>
                                    
                             </div>

        </nav>

    </div>
  )
}

export default HomeNav