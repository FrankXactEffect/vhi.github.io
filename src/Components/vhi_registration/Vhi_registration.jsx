import React from 'react'
import './vhiRegistration.css'
import VhiInputField from '../vhi_inputfield/VhiInputField'
import Vhi_upload from '../vhi_upload/Vhi_upload'
import Vhi_Button from '../vhi_button/Vhi_Button'
import Vhi_footer from '../vhi_footer/Vhi_footer'
function Vhi_registration() {
    return (
        <div>

            <div className='banner__title'>
                <h1>New Car Registration</h1>
                <p>Vehicle Identification</p>
            </div>
            <form>
                <VhiInputField />
                <Vhi_upload />
                <Vhi_Button />
            </form>
            <Vhi_footer />
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