import React from 'react'
// import build from '../images/build.png'
import './HomePage.css'
import HomeNav from './HomeNav'
import { useState,useEffect } from 'react'
import Lottie from 'lottie-react'
import homepage_ani from '../images/homepage_ani.json'

const HomePage = () => {
  const [showFirstPara, setShowFirstPara] = useState(true);

  useEffect(() => {
    const toggleTimeout = setTimeout(() => {
      setShowFirstPara(prevState => !prevState);
    }, 6000); // Change this duration to control how long each paragraph is displayed

    return () => {
      clearTimeout(toggleTimeout);
    };
  }, [showFirstPara]);
  return (
    <div>
      <HomeNav/>
   
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

export default HomePage