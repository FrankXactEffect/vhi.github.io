import React from 'react'
import './VhiOldPri.css'
import { useState } from 'react'
import VhiNavBar from '../vhi_navbar/VhiNavBar'
import Vhi_footer from '../vhi_footer/Vhi_footer'
import { toast } from 'react-toastify'
import upload from '../vhi-oldcomm/upload.png'
import { useNavigate } from 'react-router-dom';


function VhiOldPri() {
  const navigate=useNavigate()
   

  const [licence_id, driversLicence] = useState('');
  const [vin, setVin] = useState('');
  const [roadworthiness_id, setRoadWorth] = useState('');
  const [roadworthiness_image, setRoadworthinessImage] = useState(null);
  const [insurance_image, setInsuranceImage] = useState(null);

  const IsValid = () => {
    let isProceed = true;

    if (licence_id === null || licence_id === '') {
      isProceed = false;
      toast.error('Enter Your drivers Licence')
    }
    if (vin === null || vin === '') {
      isProceed = false;
      toast.error('Enter your VIN')
    }
    if (roadworthiness_id === null || roadworthiness_id === '') {
      isProceed = false;
      toast.error('Enter your Road Worthiness')

    }


    return isProceed
  }

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('licence_id', licence_id);
    formData.append('vin', vin);
    formData.append('roadworthiness_id', roadworthiness_id);
    formData.append('roadworthiness_image', roadworthiness_image);
    formData.append('insurance_image', insurance_image);


    const token = localStorage.getItem('token');

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    let submit = { licence_id, vin, roadworthiness_id, roadworthiness_image, insurance_image }
    console.log(submit);

   
    if (IsValid()) {
      navigate('/Verified');

      // fetch(`${process.env.REACT_APP_URI}/user/profile`, {
      //   method: 'POST',
      //   headers: headers,
      //   body: formData,
      //   accept: '*/*'
      // })
      //   .then((res) => {
      //     if (res.ok) {
      //       toast.success('Upload successful');
            
      //     } else {
      //       throw new Error('Request failed');
      //     }
      //   })
      //   .catch((err) => {
      //     toast.error('Failed: ' + err.message);
      //   });
    }
  };


  return (
    <div>
      <VhiNavBar />
      <div className='banner_title2'>
        <h1>Vehicle Plate Renewal</h1>
      </div>

      <form className='private-form' onSubmit={handleUpload}>

        <div className='car_input'>


          <div>
            <label >Licennse ID</label> <br />
            <input value={licence_id} onChange={e => driversLicence(e.target.value)} type="text" name="" id="input_box" />
          </div>

          <div>
            <label htmlFor="">Road Worthiness ID</label><br />
            <input value={roadworthiness_id} onChange={e => setRoadWorth(e.target.value)} type="text" name="" id="input_box" />
          </div>

          <div>
            <label htmlFor="">Vehicle Identification</label> <br />
            <input value={vin} onChange={e => setVin(e.target.value)} type="text" name="" id="input_box" />
          </div>

        </div>


        <div className='upload'  >

          <div id='image_upload'>
            <img id='add_file' src={upload} alt="" />
            <input type="file" name="" 
             id="img_file8" />
          </div>

          <div id='image_upload'>
            <img id='add_file' src={upload} alt="" />
            <input type="file" name="" id="img_file9" />
          </div>

          <div id='image_upload'>
            <img id='add_file' src={upload} alt="" />
            <input type="file" name="" id="img_file10" />
          </div>

        </div>
        <button className='renew-btn' type='submit'>Renew Plate</button>
      </form>
      <div className='pri_footer'>
        <Vhi_footer />
      </div>


    </div>
  )
}

export default VhiOldPri