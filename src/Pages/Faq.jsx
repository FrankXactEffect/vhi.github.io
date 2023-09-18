import React from 'react'
import Vhi_footer from '../Components/vhi_footer/Vhi_footer'
import dandt from '../images/dandt.png'
import cars from '../images/cars.png'
import file from '../images/file.png'
import faq from '../images/faq.png'
import '../Pages/Faq.css'
import HomeNav from '../FirstPage/HomeNav'


const Faq = () => {
  return (
    <div className='full_page'>
        <div>
        <HomeNav/>
        </div>

        <div className='left'>
            <div className='header'>
        <h1>Frequently Asked Questions</h1>
        <p>Stuck on something? we are here to help with all your question and answers</p>
        </div>

         <div className='details'>
            <div className='Date_time'>
                <img src={dandt} id='img1' alt="" />
                    <div >
                    <h3>How long does it take for renewal of plate?</h3> 
                    <p>renewal of plate is done after verification of details new plate <br />
                     number will lbe assigned to you for a yea</p>
                    </div>
            </div>  
                
                <div className='car'>
                    <img src={cars} alt="" />
                    <div >
                    <h3>Can i register multiple vehicles?</h3>
                    <p>renewal of plate is done after verification of details new plate <br />
                    number will lbe assigned to you for a year.</p>
                    </div>
                </div>  

                    <div className='file'>
                        <img src={file} alt="" />
                        <div >
                        <h3>Can i register without letter of attestation?</h3>
                        <p>renewal of plate is done after verification of details new plate <br />
                        number will lbe assigned to you for a year.</p>
                        </div>
                    </div>  
 

                            <div className='file'>
                            <img src={file} alt="" />
                            <div >
                            <h3>Can i register without letter of attestation?</h3>
                            <p>renewal of plate is done after verification of details new plate <br />
                            number will lbe assigned to you for a year.</p>
                            </div>
                                
                                        
                </div> 

                     

            </div>

            </div>  

             <div className='right'>
             <img src={faq} alt="" />
            </div>  

            <div className='faq_footer'>
            <Vhi_footer/>
            </div>
            

           
    </div>

    
  )
  
}

export default Faq