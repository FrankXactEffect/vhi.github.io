import React from 'react'
import sidebuild from '../images/sidebuild.png'
import LeftArrow from '../images/LeftArrow.png'
import Logo from '../images/Logo.png'
import '../FirstPage/ResetSucess.css'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react'
import axios from 'axios'
import Lottie from 'lottie-react'
import animationData from '../images/animation_lkw988pr.json'

function ResetSucess () {
  const navigate=useNavigate()

  const[email,userEmail] = useState("")

  const submit = () => {
    navigate("/Login");
}


  async function ForgotPword(e) {
    e.preventDefault()
    //test all state by consoling them
    try {
      const ENDPOINT_URI = `${process.env.REACT_APP_URI}/user/forgotPassword`
        //convert three state to object
        let mail = {email}
        console.warn(mail)
        
        const response = await axios.post(ENDPOINT_URI, {
            email: email,
        })

        localStorage.setItem("token", response.data.accessToken)
        //resolve all promises
        console.log(response)
        toast.success('reset Successful');
        setTimeout(submit(), 4000)

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

      <div className='size_2'>
        <Lottie loop={false} animationData={animationData}/>
        <h1 className='head'>Email Confirmed</h1> 
        <Link to="/Login" className='link2'><img src={LeftArrow} alt="" /> <p id='text3'>Back to Log in</p></Link>
       </div>

        

      </div>
    </div>
  )
}

export default ResetSucess