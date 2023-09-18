import React from 'react'
import Logo from '../images/Logo.png'
import sidebuild from '../images/sidebuild.png'
import Vehicles from '../images/Vehicles.png'
import styles from '../FirstPage/Registration.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
// import axios from 'axios'

const Registration = () => {

      const[ name,userName]=useState('');
      const[ email,userEmail]=useState('');
      const[ password,userPassword]=useState('');
      const[ repeat_password,userConfirmPassword]=useState('');

      const navigate= useNavigate();

      const IsValid=()=>{
        let isProceed=true;

        let errormessage = 'Kindly fill'
        if(name===null || name===''){
          isProceed = false;
          errormessage += ' Name';
        }
        if(email===null || email===''){
          isProceed = false;
          errormessage += ' email,';
        }
        if(password.length < 9 || password=== '' ){
          isProceed = false;
          errormessage += ' password nine characters,';
        }
        if(repeat_password===null || repeat_password===''){
          isProceed = false;
          errormessage += ' confirm password';
        }
        if (!isProceed){
          toast.warning(errormessage)
        }
        return isProceed
      }

      const handlesubmit=(e)=>{
        e.preventDefault();
        let register={name,email,password,repeat_password};
        // console.log(register);
        const ENDPOINT_URI = `${process.env.REACT_APP_URI}/user/create`
        if (IsValid()){

       fetch(ENDPOINT_URI,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(register),
        }).then((res)=>{
          toast.success('Registered Sucessfully')
          navigate('/Login')
        }).catch((err)=>{
          toast.error('Failed:'+err.message)
        });
      }
    }
      
      

  return (

    <div className='flex'>
     
      <div className={styles.side}>

          <div>
            <Link to="/">
              <img className='logo' src={Logo} alt="" />
            </Link>
          </div>

            <div>
              <h1 className='Header1'>Create Account!</h1>
              <p className='paragraph1'>Register and renew your plate <br />
              number today</p>
            </div>

                  <div>
                    <img className='img2' src={sidebuild} alt="" />
                  </div>

      </div>

      <div className={styles.Right}>

        <div className={styles.Top_text}>
          <h1>Register and renew your plate <br /> number today</h1>
          <img className={styles.Vehicle} src={Vehicles} alt="" />
        </div>

                <form className='form' onSubmit={handlesubmit}>

                  <div className={styles.name_mail}>

                    <div className='Name'>
                      <label >Name</label>
                      <br /> <input value={name} onChange={e=>userName(e.target.value)} type="tel" name="" className={styles.box} />
                    </div>

                      <div className='Email'>
                        <label>Email</label>
                        <br /><input value={email} onChange={e=>userEmail(e.target.value)} type="email" name="" className={styles.box} />
                      </div>

                  </div>


                      <div className={styles.pass_pass}>

                        <div className='Password'>
                          <label>Password</label><br />
                          <input value={password}  onChange={e=>userPassword(e.target.value)} type="password" name="" className={styles.box} />
                        </div>



                        <div className='Password'>
                          <label>Confirm Password</label><br />
                          <input value={repeat_password}  onChange={e=>userConfirmPassword(e.target.value)} type="password" name="Confirm Password" className={styles.box} />
                        </div>
                      </div>

                            <div>
                              <button type='submit' className='Btn' >Sign Up</button>
                            </div>

                              <Link to='/Login' id='Create-acct'><p id='Create-acct'>Already have an account
                                <span id='Signup'> Login</span></p>
                              </Link>

                            

                </form>

      </div>


    </div>
  )
}

export default Registration