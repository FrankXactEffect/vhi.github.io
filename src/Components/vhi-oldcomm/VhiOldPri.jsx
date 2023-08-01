import React from 'react'
import './VhiOldPri.css'
import { useState } from 'react'
import VhiNavBar from '../vhi_navbar/VhiNavBar'
import Vhi_footer from '../vhi_footer/Vhi_footer'
import { toast } from 'react-toastify'
// import axios from 'axios'
// import upload from './upload.png'
// import axios from 'axios'

function VhiOldPri() {

  const [licence_id,driversLicence]=useState('');
  const [vin,setVin]=useState('');
  const [roadworthiness_id,setRoadWorth]=useState('');
  // const [car_license_image, setCarLicenseImage] = useState(null);
  const [roadworthiness_image, setRoadworthinessImage] = useState(null);
  const [insurance_image, setInsuranceImage] = useState(null);

  console.log(roadworthiness_id);

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

const handleUpload = (e) => {
  e.preventDefault();
  const token = localStorage.getItem('token');
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const formData = new FormData();
        
  formData.append('licence_id', licence_id);
  formData.append('vin', vin);
  // formData.append('car_license_image', car_license_image);
  formData.append('roadworthiness_id', roadworthiness_id);
  formData.append('roadworthiness_image', roadworthiness_image);
  formData.append('insurance_image', insurance_image);

  if (IsValid()) {
    formData.append('Content-Type', 'multipart/form-data');
    fetch (`${process.env.REACT_APP_URI}/user/profile`, {
      method: 'POST',
      headers: headers,
      body: formData,
      accept : '*/*'
    })
      .then((res) => {
        if (res.ok) {
          toast.success('Upload successful');
          // navigate('/Login');
        } else {
          throw new Error('Request failed');
        }
      })
      .catch((err) => {
        toast.error('Failed: ' + err.message);
      });
  }
};


  return (
    <div>
        <VhiNavBar/>
            <div className='banner__title'>
                <h1>Vehicle Plate Renewal</h1>
            </div>

            <form  className='private-form' onSubmit={handleUpload}>
                
            <div className='car_input'>

        
                <div>
                <label >Licennse ID</label> <br />
                <input value={licence_id} onChange={e=>driversLicence(e.target.value)} type="text" name="" id="form" />
                </div>

                <div>
                <label htmlFor="">Road Worthiness ID</label><br />
                <input value= {roadworthiness_id} onChange={e=>setRoadWorth(e.target.value)} type="text" name="" id="form" />
                </div>

                <div>
                <label htmlFor="">Vehicle Identification</label> <br />
                <input value={vin} onChange={e=>setVin(e.target.value)} type="text" name="" id="form" />
                </div>

              </div>  

                <div  className='upload'  >
                   
                {/* <div>
                <input onChange={(e) => setCarLicenseImage(e.target.value)} type="file" name="" id="file" className=''  />       
                <img src={upload} id='img' alt="" />
                <label id='label' htmlFor="file">Car Licence</label>
                  </div> */}

                <div>
                <input  onChange={e=>setRoadworthinessImage(e.target.value)} type="file" name="" id="file" className=''   />
                {/* <img src={upload} id='img' alt="" />
                <label id='label' htmlFor="file">Road Worthiness</label> */}
                </div>
                
                <div>
                <input  onChange={e=>setInsuranceImage(e.target.value)} type="file" name="" id="file" className='' />
                {/* <img src={upload} id='img' alt="" />
                <label id='label' htmlFor="file">Insurance Image</label> */}
                </div>

            </div>
                <button className='renew-btn' type='submit'>Renew Plate</button>
            </form>
            
            <Vhi_footer/>
    
    </div>
  )
}

export default VhiOldPri