import React from 'react'
import about from '../images/about.png'
import '../OnLogin/UserAbout.css'
import Vhi_footer from '../Components/vhi_footer/Vhi_footer'
import VhiNavBar from '../Components/vhi_navbar/VhiNavBar'



const UserAbout = () => {
  return (
    <div >
       <div>
       <VhiNavBar/>
       </div>
     <div className='main_page'>

      <h1 className='Header'>About Us</h1>
            
            <p className='Text'>At Vehicle Registration Services, we understand the importance of hassle-free <br />
vehicle registration and the value of your time. We are a dedicated team of professionals committed to <br />
providing you with efficient and streamlined vehicle registration services. With years of experience in the industry, <br />
 we have gained comprehensive knowledge of the registration process, making us your go-to source for all your registration needs.</p>
    
                <img id='image_p' src={about} alt="" />
       </div>
          
              <div>
              <Vhi_footer/>
              </div>
    </div>
  )
}

export default UserAbout