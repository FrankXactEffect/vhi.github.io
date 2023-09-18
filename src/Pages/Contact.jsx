import React from 'react'
import contact from '../images/contact.png'
import '../Pages/Contact.css'
import HomeNav from '../FirstPage/HomeNav'
import Vhi_footer from '../Components/vhi_footer/Vhi_footer'
// import Vhi_footer from '../Components/vhi_footer/Vhi_footer'
// import Vhi_Button from '../Components/vhi_button/Vhi_Button'
// import Vhi_footer from '../Components/vhi_footer/Vhi_footer'

const Contact = () => {
  return (
    <div>

      <div>
        <HomeNav/>
      </div>

    <div className='Full_page'>

       <div>
             <h1 className='Header1'>Contact Us</h1>
                <h3>Have a question or need assistance?</h3>
                        <p className='text'>We're here to help! Reach out to our friendly team at <br />
                            Vehicle Registration Services for all your vehicle registration needs</p>

                    <div className='inputs'>
                        <label htmlFor="">Name</label> <br />  
                        <input type="text" name="" id="box" />  <br /> 

                        <label htmlFor="">E-mail</label> <br />
                        <input type="text" name="" id="box" /> <br />    

                        <label htmlFor="">Text</label>  <br />
                        <input type="text" name="" id="box2" /> 

                        <button className='Submit'>Submit</button>
                    </div>    
        </div>       
           
                 <div>
                 <img className='contact_img' src={contact} alt="" />
                 </div>         
      </div>
      <div className='contact_footer2'>
      <Vhi_footer/>
      </div>
                 
    </div>
    

            


  
     
  )
  
}

export default Contact