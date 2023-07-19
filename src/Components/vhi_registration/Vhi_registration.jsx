import React from 'react'
import VhiNavBar from '../vhi_navbar/VhiNavBar'
import './vhiRegistration.css'
import VhiInputField from '../vhi_inputfield/VhiInputField'
import Vhi_upload from '../vhi_upload/Vhi_upload'
function Vhi_registration() {
    return (
        <div>
            <VhiNavBar />
            <div className='banner__title'>
                <h1>New Car Registration</h1>
                <p>Owner Identification</p>
            </div>
            <form>
                <VhiInputField />
                <Vhi_upload />
            </form>

            {/* Navbar */}
            {/* banner title */}
            {/* input fields */}
            {/* upload fields */}
            {/* button */}
            {/* footer */}
        </div>
    )
}

export default Vhi_registration