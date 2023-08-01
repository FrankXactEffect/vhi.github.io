import React from 'react'
import Logo from '../images/Logo.png'
import sidebuild from '../images/sidebuild.png'
import Vehicles from '../images/Vehicles.png'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

function Login() {
  const navigate=useNavigate()
  const [email, userEmail] = useState("")
  const [password, userPassword] = useState("")

  const logged = () => {
      navigate("/UserPage");
  }

  async function signIn(e) {
      e.preventDefault()
      //test all state by consoling them
      try {
        const ENDPOINT_URI = `${process.env.REACT_APP_URI}/user/login`
          //convert three state to object
          let item = { email, password }
          console.warn(item)
          //https://to-do-service-backend-tutorial.onrender.com/users/create
          const response = await axios.post(ENDPOINT_URI, {
              email: email,
              password: password,
          })

          localStorage.setItem("token", response.data.accessToken)
          //resolve all promises
          console.log(response)
          toast.success('Login Sucessful');
          setTimeout(logged(), 4000)

      } catch (e) {
          //check wether result is coming or not
          console.log(e)
          toast.error('failed, check your details')

      }

  }
  

  return (

    <div className='flex'>

      <div className='side'>
        <div>
          <Link to="/">
            <img className='logo' src={Logo} alt="" />
          </Link>

        </div>

        <div>
          <h1 className='Header1'>Welcome!</h1>
          <p className='paragraph1'>Register and renew your plate <br /> number today</p>
        </div>

        <div>
          <img className='img' src={sidebuild} alt="" />

        </div>
      </div>



      <div className='Right-side'>

        <div className='Top-text'>
          <h1 className='register'>Register and renew your plate <br /> number today</h1>
          <img className='Vehicle' src={Vehicles} alt="" />
        </div>

      <form className='form'>

          <div className='Email'>
            <label id='label1'>Email</label><br />
            <input required value={email} onChange={e=>userEmail(e.target.value)} type="email" name="" id="box1"  /> <br />
          </div>

          <div className='Password'>
            <label id='label1'>Password</label> <br />
            <input value={password} onChange={e=>userPassword(e.target.value)} type="password" name="" id="input2"  />
          </div>

          <Link to='/ForgotPassword' id='fgt-pwd'>
            Forgot Password
          </Link>

          <div>
            <button type='submit' onClick={signIn} className='Btn' >Log in</button>
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