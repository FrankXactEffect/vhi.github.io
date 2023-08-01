import React from 'react'
import "./vhiNewReg.css"
import Vhi_footer from '../vhi_footer/Vhi_footer'
import VhiNavBar from '../vhi_navbar/VhiNavBar';
import { useState } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';





function Vhi_NewReg() {

    const [first_name, setFirstName] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [address, setAddress] = useState('');
    const [date_of_birth, setDateBirth] = useState('');
    const [gender, setGender] = useState('');
    const [identity_number, setIdentity] = useState('');
    const handleGenderChange = (event) => {
        setGender(event.target.value); // Update the gender state with the selected value
    };
    const [image, setImageURL] = useState('');
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageURL(file);
      };
    

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('address', address);
        formData.append('date_of_birth', date_of_birth);
        formData.append('gender', gender);
        formData.append('identity_number', identity_number);
        formData.append('image', image);

        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        let submit = { first_name, last_name, address, gender, image };
        console.log(submit);

        const ENDPOINT_URI = `${process.env.REACT_APP_URI}/user/profile`

        console.log(ENDPOINT_URI)

        // try {

            axios.post (ENDPOINT_URI,formData, {
                'Content-Type': 'multipart/form-data',
                method: 'POST',
                headers: headers,
            })

            .then(response => {
                console.log(response.data);
              })
              .catch(error => {
                console.error('Error:', error);
              });

            // localStorage.setItem("token", response.data.accessToken)
            // //resolve all promises
            // console.log()
        //     toast.success('Sucessful');


        // } catch (e) {
        //     console.log(e)
        //     toast.error('failed')

        // }


    }

    return (

        <div className='newRegistration-container'>
            
            <VhiNavBar />

            <div className='banner__title'>
                <h1>New Registration</h1>
                <p>Owner Identification</p>
            </div>

            <form onSubmit={handleSubmit} action='upload' method='post' encType='multipart/form-data' >
                
                <div>
                    <label htmlFor="">First Name</label>
                    <input value={first_name} onChange={e => setFirstName(e.target.value)} type="text" name="" id="" />
                </div>

                <div>
                    <label htmlFor="">Last Name</label>
                    <input value={last_name} onChange={e => setLast_Name(e.target.value)} type="text" name="" id="" />
                </div>

                <div>
                    <label htmlFor="">address</label>
                    <input value={address} onChange={e => setAddress(e.target.value)} type="text" name="" id="" />
                </div>

                <div>

                    <select value={gender} onChange={handleGenderChange}>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>

                </div>

                <div>
                    <label htmlFor="">Date of Birth</label>
                    <input value={date_of_birth} onChange={e => setDateBirth(e.target.value)} type="text" name="" id="" />
                </div>

                <div>
                    <label htmlFor="">Identity Number</label>
                    <input value={identity_number} onChange={e => setIdentity(e.target.value)} type="text" name="" id="" />
                </div>

                <div>
                    <label htmlFor="" >Identity Card</label>
                    <input accept='image/*' onChange={handleImageChange}  type="file" name="" id="" />
                    
                    </div>

                <div>
                    <button  type='submit'>Submit</button>
                </div>




            </form>
            <Vhi_footer />
        </div>
    )
}

export default Vhi_NewReg