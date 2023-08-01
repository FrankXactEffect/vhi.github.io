import React from 'react'
import sidebuild from '../images/sidebuild.png'
import FgtIMG from '../images/FgtIMG.png'
import LeftArrow from '../images/LeftArrow.png'
import Logo from '../images/Logo.png'
import '../FirstPage/ForgotPassword.css'
import {Link} from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className='flex'>
        <div className='side'>
                        <div>
                          <Link to ="/">
                          <img className='logo' src={Logo} alt="" />
                          </Link>
                            
                        </div>

                                <div>
                                    <h1 className='Header1'>Welcome!</h1>
                                    <p className='paragraph1'>Register and renew your plate <br/> number today</p>
                                </div>

                                        <div>
                                            <img className='img' src={sidebuild} alt="" />

                                        </div>
                    </div> 

        <div className='rightside'>

            <img className='png' src={FgtIMG} alt="" />
                
                <h1 className='header3'>Forgot Password</h1>
                
                <p className='text3'>No worries, we’ll send you reset instructions</p>
                
                <input type="email" name="" id="email"  placeholder='Enter your email'/>

                    <button className='reset'>Reset Password</button>

                        <Link to= "/Login" className='link'><img src={LeftArrow} alt="" /> <p id='text2'>Back to Log in</p></Link>

        </div>            
    </div>
  )
}

export default ForgotPassword