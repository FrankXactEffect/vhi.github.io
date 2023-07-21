import React from 'react'
import Logo from '../images/Logo.png'
import sidebuild from '../images/sidebuild.png'
import Vehicles from '../images/Vehicles.png'
import './Login.css'
import {Link} from 'react-router-dom'


const Login = () => {
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

                    

                                                <div className='Right-side'>
                                                        
                                                        <div className='Top-text'>
                                                            <h1 className='register'>Register and renew your plate <br /> number today</h1>
                                                            <img className='Vehicle' src={Vehicles}alt="" />
                                                        </div>

                                                                        <form className='form' action="">
                                                                       
                                                                                <div className='Email'>
                                                                                <label htmlFor="text" id='label'>Email</label><br/>
                                                                                <input type="text" name="" id="" className='input' /> <br />    
                                                                                </div>

                                                                                        <div className='Password'>
                                                                                        <label htmlFor="text" id='label'>Password</label> <br />
                                                                                        <input type="text" name="" id="" className='input' />
                                                                                        </div> 

                                                                                                <Link to='/ForgotPassword' id='fgt-pwd'>
                                                                                                Forgot Password
                                                                                                </Link>

                                                                          


                                                                                                    <div>
                                                                                                         <button className='Btn' >Log in</button>
                                                                                                         <Link to='/Registration' id='Create-acct'><p id='Create-acct'>Create an account? 
                                                                                                              <span id='Signup'> Sign Up</span></p>
                                                                                                         </Link>
                                                                                                            
                                                                                                            </div>

                                                                        </form>                                    

                                                </div>

                    

</div>                   

  )
}

export default Login