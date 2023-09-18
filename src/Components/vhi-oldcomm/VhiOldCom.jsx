import React from 'react'
import './vhiOldCom.css'
import { useState } from 'react'
import VhiNavBar from '../vhi_navbar/VhiNavBar'
import Vhi_footer from '../vhi_footer/Vhi_footer'
import { toast } from 'react-toastify'
import upload from '../vhi-oldcomm/upload.png'
import { useNavigate } from 'react-router-dom';



function VhiOldCom() {
  const navigate=useNavigate()

    // const [car_license_image,setImage]=useState('');
    const [licence_id,setLicence]=useState('');
    const [vin,setVin]=useState('');
    // const [roadworthiness_image,setImage2]=useState('');
    const [roadworthiness_id,setRoad]=useState('');
    // const [insurance_image,setImage3]=useState('');
    // const [carrier_permit_image,setImage4]=useState('');
    // const [heavy_goods_permit_image,setImage5]=useState('');
    
    const IsValid=()=>{
        let isProceed=true;

        if(licence_id===null || licence_id===''){
          isProceed = false;
         toast.error('Enter Your drivers Licence')
        }
        if(vin===null || vin===''){
          isProceed = false;
          toast.error('Enter your VIN')
        }
        if(roadworthiness_id === null || roadworthiness_id === ''){
          isProceed = false;
          toast.error('Enter your Road Worthiness')
          
        }
        
        
        return isProceed
      }
    const handleUpload=(e)=>{
        e.preventDefault();
        
        // let upload={car_license_image,licence_id,vin,roadworthiness_id,roadworthiness_image,insurance_image,carrier_permit_image,heavy_goods_permit_image}
        
        if (IsValid()){
          navigate('/Verified');

            // fetch("https://licence-reg-renewal-api.onrender.com/oldCarReg",{
            //   method:'POST',
            //   headers:{'Content-Type':'application/json'},
            //   body:JSON.stringify(upload),
            // }).then((res)=>{
            //   toast.success('upload successful')
            // //   navigate('/Login')
            // }).catch((err)=>{
            //   toast.error('Failed:'+err.message)
            // });
        }
     }
    

    return (
        <div>
            <VhiNavBar/>

            <div className='banner_title'>
                <h1>Vehicle Plate Renewal</h1>
            </div>

            <form className='oldCommercial-form' onSubmit={handleUpload}>
                
            <div className='top'>

              <div>
                <label >Licennse ID</label > <br />
                <input value={licence_id} onChange={e=>setLicence(e.target.value)} type="text" name="" id="input_box" /> 
              </div>

              <div>
                <label htmlFor="">Road Worthiness ID</label> <br />
                <input value={roadworthiness_id} onChange={e=>setRoad(e.target.value)} type="text" name="" id="input_box" />
               </div>
                 
                 <div>
                <label htmlFor="">Vehicle Identification</label> <br />
                <input value={vin} onChange={e=>setVin(e.target.value)} type="text" name="" id="input_box" />
                </div>
            </div>
            
          
             
            <div className='bottom'>
                  <div className='comm_upload'>
                  <img id='add-file2' src={upload} alt="" />
                   <input type="file" name="" id="img_file11" />
                  </div>

                  <div className='comm_upload'>
                  <img id='add-file2' src={upload} alt="" />
                   <input type="file" name="" id="img_file12" />
                  </div>

                  <div className='comm_upload'>
                  <img id='add-file2' src={upload} alt="" />
                   <input type="file" name="" id="img_file13" />
                  </div>
             
             </div>

             <div className='bottom_bottom' >  
                  <div className='comm_upload'>
                  <img id='add-file2' src={upload} alt="" />
                   <input type="file" name="" id="img_file14" />
                  </div>

                  <div className='comm_upload'>
                  <img id='add-file2' src={upload} alt="" />
                   <input type="file" name="" id="img_file15" />
                  </div>
              
              </div> 



                <button className='renew_btn' type='submit'>Renew Plate</button>
            
            </form>

            
            <div className='comm_footer'>
            <Vhi_footer/>
            </div>
        
        </div>

    )
}

export default VhiOldCom