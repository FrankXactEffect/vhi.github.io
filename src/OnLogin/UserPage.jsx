import React from 'react'
// import build from '../images/build.png'
import VhiNavBar from '../Components/vhi_navbar/VhiNavBar'
import '../OnLogin/UserPage.css'
import Lottie from 'lottie-react'
import homepage_ani from '../images/homepage_ani.json'
import { useState,useEffect } from 'react'

export const UserPage = () => {
  const [showFirstPara, setShowFirstPara] = useState(true);

  useEffect(() => {
    const toggleTimeout = setTimeout(() => {
      setShowFirstPara(prevState => !prevState);
    }, 3000); // Change this duration to control how long each paragraph is displayed

    return () => {
      clearTimeout(toggleTimeout);
    };
  }, [showFirstPara]);

  return (
    <div>

      <VhiNavBar/>
                <div className='Body-image'> 

                    <h1 className='Header'>Register and renew your <br />
                            plate number today. </h1>

                      <p className={`para ${showFirstPara ? 'fade-in' : 'fade-out'}`}>
                      Register your private and commercial vehicle today.
                    </p>
                    <p className={`para1 ${showFirstPara ? 'fade-out' : 'fade-in'}`}>
                      Renew your plate vehicle's plate number.
                    </p>
                      
                                <div className='home_page'>
                                <Lottie loop={true} animationData={homepage_ani}/>
                                {/* <img className='build_1' src={build} alt="" /> */}
                                </div>      
                    
                </div> 

    
    </div>
  )
}
