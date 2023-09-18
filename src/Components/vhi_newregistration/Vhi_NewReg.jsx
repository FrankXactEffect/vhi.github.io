import React from 'react'
import "./vhiNewReg.css"
import Vhi_footer from '../vhi_footer/Vhi_footer'
import VhiNavBar from '../vhi_navbar/VhiNavBar';
import { useState} from 'react';
import { toast } from 'react-toastify'
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import upload from '../vhi-oldcomm/upload.png'
import dropdon from '../vhi_newregistration/dropdon.png'


function Vhi_NewReg() {

    const navigate=useNavigate()
   
    // const [accessToken, setAccessToken] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [address, setAddress] = useState('');
    const [date_of_birth, setDateBirth] = useState('');
    const [gender, setGender] = useState('');
    const [identity_number, setIdentity] = useState('');
   
    const handleGenderChange = (event) => {setGender(event.target.value)}; 
    
    const [image, setImageURL] = useState('');
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageURL(file);
      };

     const token = window.localStorage.getItem('token');
     console.log(token);

      const IsValid = () => {
        let isProceed = true;
    
        if (first_name === null || first_name === '') {
          isProceed = false;
          toast.error('Enter Your First Name')
        }
        if (last_name === null || last_name === '') {
          isProceed = false;
          toast.error('Enter your last name')
        }
        if (date_of_birth === null || date_of_birth === '') {
          isProceed = false;
          toast.error('Enter your Date of Birth')
        }
        if (gender === null || gender === '') {
            isProceed = false;
            toast.error('Enter your gender')
          }
        if (identity_number === null || identity_number === '') {
            isProceed = false;
            toast.error('Enter identity number')
          }
    
    
        return isProceed
      }  
   
      async function handleSubmit(e) {
        e.preventDefault();  
        

        let submit = { first_name, last_name, address, gender, image };
        console.log(submit);

        if (IsValid()) {
   
        try{

        const formData = new FormData();
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('address', address);
        formData.append('date_of_birth', date_of_birth);
        formData.append('gender', gender);
        formData.append('identity_number', identity_number);
        formData.append('image', image);

        // const response = await axios.post("https://license-registration.onrender.com/user/profile", formData, {
        //     headers: {
        //         'Authorization': `Bearer ${token}`,
        //         'accept': '*/*',
        //     }
        // });

        navigate("/Vhi_registration");
            // if (response.status === 200) {
            //     // Handle success
            //     console.log(response.data);
            //     toast.success('Upload Successful');
            //     navigate("/Vhi_registration"); // Navigate to success page or desired route
            // } else {
            //     // Handle other status codes or errors
            //     console.log('Upload failed');
            //     toast.error('Upload Failed');
            // }
        }
        catch(e) {
            console.log(e)
            toast.error('failed')
        }


     }   
            

    }

    return (

        <div className='newRegistration-container'>
            
            <VhiNavBar />

            <div className='banner_title'>
                <h1>User Registration</h1>
            </div>

            <form onSubmit={handleSubmit} >

              <div className='top_three'>
                
                <div>
                    <label htmlFor="">First Name</label><br />
                    <input value={first_name} onChange={e => setFirstName(e.target.value)} type="text" name="first_name" id="input_box" />
                </div>

                <div>
                    <label htmlFor="">Last Name</label><br />
                    <input value={last_name} onChange={e => setLast_Name(e.target.value)} type="text" name="last_name" id="input_box" />
                </div>

                <div>
                    <label htmlFor="">Address</label><br />
                    <input value={address} onChange={e => setAddress(e.target.value)} type="text" name="address" id="input_box" />
                </div>

                </div>  

                
            <div className='bottom_three'>
                <div>
                    <label htmlFor="">Date of Birth</label><br />
                    <input type="date" value={date_of_birth} onChange={e => setDateBirth(e.target.value)} name="date_of birth" id="input_box" />
                    {/* <input  onChange={e => setDateBirth(e.target.value)} type="text" name="date_of_birth" /> */}
                </div>

                <div>
                    <label id='Id_number' htmlFor="">Identity Number</label><br />
                    <input value={identity_number} onChange={e => setIdentity(e.target.value)} type="text" name="identity_number" id="input_box2" />
                </div>

                
                    
                <div className='mandf'>
                
                        <select id='gend' name='gender' value={gender} onChange={handleGenderChange}>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            
                        </select>
                        <img className='icon' src={dropdon} alt="" />

                </div>

                </div>  

                <div className='img_bottom' id='image_upload'> 
                    <img id='add_file' src={upload} alt="" />
                    <input accept='image/*' onChange={handleImageChange}  type="file" name="image" id="img_file7" />
                    
                </div>
                      

                <div className='button'>
                    <button className='Btn_1'  type='submit'>Submit</button>
                </div>




            </form>
            <div className='footer'>
            <Vhi_footer />
            </div>
        </div>
    )
}

export default Vhi_NewReg