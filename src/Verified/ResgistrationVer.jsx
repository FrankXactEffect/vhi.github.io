import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../images/animation_lkw988pr.json'
import Vhi_footer from '../Components/vhi_footer/Vhi_footer'
import VhiNavBar from '../Components/vhi_navbar/VhiNavBar'
import './RegsiVeri.css'

const ResgistrationVer = () => {
  return (
    <div>
         <VhiNavBar/>
       <h1 className='banner_title4'>Registration Confirmed</h1>
       <div className='size'>
        <Lottie loop={true} animationData={animationData}/>
       </div>
       <div className='Bottom_text2'>
       <p className='tag'>Your Registration has been received! </p>
    </div>
    <div className='reg_foot'>
    <Vhi_footer/>
    </div>
  </div>
  )
}

export default ResgistrationVer