import React from 'react'
import Logo from '../images/Logo.png'
import sidebuild from '../images/sidebuild.png'
import Vehicles from '../images/Vehicles.png'
import styles from '../FirstPage/Registration.module.css'
import {Link} from 'react-router-dom'

const Registration = () => {
  return (
    
    <div className='flex'>
        <div className={styles.side}>
                        <div>
                          <Link to ="/">
                          <img className='logo' src={Logo} alt="" />
                          </Link>
                            
                        </div>

                                <div>
                                    <h1 className='Header1'>Create Account!</h1>
                                    <p className='paragraph1'>Register and renew your plate <br/> number today</p>
                                </div>

                                        <div>
                                            <img className='img' src={sidebuild} alt="" />

                                        </div>
        </div>  



         <div className = {styles.Right}>
                                                        
                     <div className={styles.Top_text}>
                        <h1>Register and renew your plate <br /> number today</h1>
                        <img className={styles.Vehicle} src={Vehicles}alt="" />
                     </div>

                                     <form className='form' action="">
                                           
                                     <div className={styles.name_mail}>


                                             <div className='Name'>
                                                <label htmlFor="text">Name</label>
                                               <br /> <input type="tel" name="" className={styles.box} />
                                              </div>  
                                                           <div className='Email'>    
                                                             <label htmlFor="">Email</label>
                                                             <br /><input type="email" name="" className={styles.box} />
                                                           </div>  
                                      </div>     


                                      <div className={styles.pass_pass}>                 

                                                                  <div className='Password'>
                                                                    <label htmlFor="">Password</label><br />
                                                                    <input type="password" name="" className={styles.box}/>
                                                                </div>

                                                   
                                                                                                       
                                                                         <div className='Password'>
                                                                            <label htmlFor="">Confirm Password</label><br />
                                                                            <input type="password" name="Confirm Password" className={styles.box}/>
                                                                         </div> 
                                       </div>                                       

                                                                                        <div>
                                                                                            <button className='Btn' >Sign Up</button>                  
                                                                                            <Link to='/Login' id='Create-acct'><p id='Create-acct'>Already have an account
                                                                                            <span id='Signup'> Login</span></p>
                                                                                            </Link>           
                                                                                          </div>

                                                                        </form>                                    

        </div>


    </div>
  )
}

export default Registration