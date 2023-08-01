import React from 'react'
import build from '../images/build.png'
import VhiNavBar from '../Components/vhi_navbar/VhiNavBar'


export const UserPage = () => {
  return (
    <div>

      <VhiNavBar/>
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
