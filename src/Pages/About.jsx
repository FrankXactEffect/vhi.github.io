import React from 'react'
import about from '../images/about.png'
import '../Pages/About.css'
import Vhi_footer from '../Components/vhi_footer/Vhi_footer'
import HomeNav from '../FirstPage/HomeNav'



const About = () => {
  return (
    <div >
       <div>
       <HomeNav/>
       </div>
     <div className='main_page'>

      <h1 className='Header'>About Us</h1>
            
            <p className='Text'>At Vehicle Registration Services, we understand the importance of hassle-free <br />
vehicle registration and the value of your time. We are a dedicated team of professionals committed to <br />
providing you with efficient and streamlined vehicle registration services. With years of experience in the industry, <br />
 we have gained comprehensive knowledge of the registration process, making us your go-to source for all your registration needs.</p>
    
                <img id='image' src={about} alt="" />
       </div>
          
              <div className='about_footer'>
              <Vhi_footer/>
              </div>
    </div>
  )
}

export default About