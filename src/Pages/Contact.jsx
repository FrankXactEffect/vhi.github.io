import React from 'react'
import contact from '../images/contact.png'
import '../Pages/Contact.css'
import Vhi_Button from '../Components/vhi_button/Vhi_Button'
import Vhi_footer from '../Components/vhi_footer/Vhi_footer'

const Contact = () => {
  return (
    <div className='Full_page'>

       <div>
             <h1 className='Header'>Contact Us</h1>
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

            


  
     
  )
  
}

export default Contact