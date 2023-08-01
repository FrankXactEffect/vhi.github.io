import React from 'react'
import './vhiOldCom.css'
import { useState } from 'react'
import VhiNavBar from '../vhi_navbar/VhiNavBar'
import Vhi_footer from '../vhi_footer/Vhi_footer'
import { toast } from 'react-toastify'



function VhiOldCom() {

    const [car_license_image,setImage]=useState('');
    const [licence_id,setLicence]=useState('');
    const [vin,setVin]=useState('');
    const [roadworthiness_image,setImage2]=useState('');
    const [roadworthiness_id,setRoad]=useState('');
    const [insurance_image,setImage3]=useState('');
    const [carrier_permit_image,setImage4]=useState('');
    const [heavy_goods_permit_image,setImage5]=useState('');
    
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
        
        let upload={car_license_image,licence_id,vin,roadworthiness_id,roadworthiness_image,insurance_image,carrier_permit_image,heavy_goods_permit_image}
        
        if (IsValid()){

            fetch("https://licence-reg-renewal-api.onrender.com/oldCarReg",{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify(upload),
            }).then((res)=>{
              toast.success('upload successful')
            //   navigate('/Login')
            }).catch((err)=>{
              toast.error('Failed:'+err.message)
            });
        }
     }
    

    return (
        <div>
            <VhiNavBar/>

            <div className='banner__title'>
                <h1>Vehicle Plate Renewal</h1>
            </div>

            <form className='oldCommercial-form' onSubmit={handleUpload}>
                
                <label >Licennse ID</label>
                <input value={licence_id} onChange={e=>setLicence(e.target.value)} type="text" name="" id="" />

                <label htmlFor="">Road Worthiness ID</label>
                <input value={roadworthiness_id} onChange={e=>setRoad(e.target.value)} type="text" name="" id="" />

                <label htmlFor="">Vehicle Identification</label>
                <input value={vin} onChange={e=>setVin(e.target.value)} type="text" name="" id="" />

                <input value={car_license_image} onChange={e=>setImage(e.target.value)} type="file" name="" id=""  />
                <input value={roadworthiness_image} onChange={e=>setImage2(e.target.value)} type="file" name="" id=""  />
                <input value={insurance_image} onChange={e=>setImage3(e.target.value)} type="file" name="" id=""  />
                <input value={carrier_permit_image} onChange={e=>setImage4(e.target.value)} type="file" name="" id=""  />
                <input value={heavy_goods_permit_image} onChange={e=>setImage5(e.target.value)} type="file" name="" id=""  /> 

                <button type='submit'>Renew Plate</button>
            </form>
            
            <Vhi_footer/>
        </div>
    )
}

export default VhiOldCom