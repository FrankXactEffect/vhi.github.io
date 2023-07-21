import React from 'react'
import build from '../images/build.png'
import Logo from '../images/Logo.png'
import './HomePage.css'
import {Link} from 'react-router-dom'



const HomePage = () => {
  return (
    <div>
        <nav className='Navbar'>

            <div >
            <img className='logo1' src={Logo} alt="" />
            </div>

                        <div className='Links'>
                            <Link id='links'>About</Link>
                            <Link id='links'>FAQ</Link>
                            <Link id='links'>Contact</Link>
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



                <div className='Body-image'> 

                    <h1 className='Header'>Register and renew your <br />
                            plate number today. </h1>

                      <p className='para'>Register and renew your plate number today. </p>
                      
                                <div className='Image'>
                                <img className='build' src={build} alt="" />
                                </div>      
                    
                </div> 

    </div>


  )
}

export default HomePage