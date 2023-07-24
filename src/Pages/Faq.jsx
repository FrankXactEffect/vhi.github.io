import React from 'react'
import Vhi_footer from '../Components/vhi_footer/Vhi_footer'
import dandt from '../images/dandt.png'
import car from '../images/car.png'
import file from '../images/file.png'
import faq from '../images/faq.png'
import '../Pages/Faq.css'


const Faq = () => {
  return (
    <div className='full_page'>
        <div className='left'>
        <h1>Frequently Asked Questions</h1>
        <p>Stuck on something? we are here to help with all your question and answers</p>
         
         <div className='details'>
            <div className='Date_time'>
                <img src={dandt} id='img1' alt="" />
                    <div className='flex'>
                    <h3>How long does it take for renewal of plate?</h3> 
                    <p>renewal of plate is done after verification of details new plate <br />
                     number will lbe assigned to you for a yea</p>
                    </div>
            </div>  
                
                <div className='car'>
                    <img src={car} alt="" />
                    <div className='flex'>
                    <h3>Can i register multiple vehicles?</h3>
                    <p>renewal of plate is done after verification of details new plate <br />
                    number will lbe assigned to you for a year.</p>
                    </div>
                </div>  

                    <div className='file'>
                        <img src={file} alt="" />
                        <div className='flex'>
                        <h3>Can i register without letter of attestation?</h3>
                        <p>renewal of plate is done after verification of details new plate <br />
                        number will lbe assigned to you for a year.</p>
                        </div>
                    </div>  

                        <div className='file'>
                            <img src={file} alt="" />
                            <div className='flex'>
                            <h3>Can i register without letter of attestation?</h3>
                            <p>renewal of plate is done after verification of details new plate <br />
                            number will lbe assigned to you for a year.</p>
                            </div>
                        </div> 

                            <div className='file'>
                            <img src={file} alt="" />
                            <div className='flex'>
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

            
            <Vhi_footer/>
            

           
    </div>

    
  )
  
}

export default Faq