import React from 'react'
import './vhiRegistration.css'
import Vhi_footer from '../vhi_footer/Vhi_footer'
import VhiNavBar from '../vhi_navbar/VhiNavBar'
import upload from '../vhi-oldcomm/upload.png'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Vhi_registration() {

   const navigate = useNavigate()


   // const [licence_id, driversLicence] = useState('');
   const [vin, setVin] = useState('');
   // const [roadworthiness_id, setRoadWorth] = useState('');
   // const [roadworthiness_image, setRoadworthinessImage] = useState(null);
   // const [insurance_image, setInsuranceImage] = useState(null);

   const IsValid = () => {
      let isProceed = true;

      if (vin === null || vin === '') {
         isProceed = false;
         toast.error('Enter your VIN')
      }


         return isProceed
      }

      const handleUpload = (e) => {
         e.preventDefault();

         // const formData = new FormData();
         // formData.append('vin', vin);
         // formData.append('roadworthiness_id', roadworthiness_id);
         // formData.append('roadworthiness_image', roadworthiness_image);
         // formData.append('insurance_image', insurance_image);


         // const token = localStorage.getItem('token');

         // const headers = {
         //    Authorization: `Bearer ${token}`,
         // };

         // let submit = { licence_id, vin, roadworthiness_id, roadworthiness_image, insurance_image }
         // console.log(submit);


         if (IsValid()) {
            navigate('/RegistrationVer');

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



         <div className='vhi_registration-container'>

            <VhiNavBar />

            <div className='banner_title'>
               <h1>New Car Registration</h1>
            </div>

            <form onSubmit={handleUpload}>

               <div className='vin'>
                  <label htmlFor="">Vehicle Identification Number</label> <br />
                  <input value={vin} onChange={e => setVin(e.target.value)} type="text" name="vin" id="input_box_vin" />
               </div>


               <div className='Top'>

                  <div id='image_upload'>
                     <img id='add_file' src={upload} alt="" />
                     <input type="file" name="" id="img_file" />
                  </div>

                  <div id='image_upload'>
                     <img id='add_file' src={upload} alt="" />
                     <input type="file" name="" id="img_file2" />
                  </div>

                  <div id='image_upload' >
                     <img id='add_file' src={upload} alt="" />
                     <input type="file" name="" id="img_file3" />
                  </div>

               </div>

               <div className='Bottom'>

                  <div id='image_upload'>
                     <img id='add_file' src={upload} alt="" />
                     <input type="file" name="" id="img_file4" />
                  </div>

                  <div id='image_upload'>
                     <img id='add_file' src={upload} alt="" />
                     <input type="file" name="" id="img_file5" />
                  </div>

                  <div id='image_upload'>
                     <img id='add_file' src={upload} alt="" />
                     <input type="file" name="" id="img_file6" />
                  </div>

               </div>


               <div className='button'>
                  <button className='Btn_1' type='submit'>Register</button>
               </div>

            </form>

            <div className='registration_footer'>
               <Vhi_footer />
            </div>

         </div>
      )
   }

   export default Vhi_registration