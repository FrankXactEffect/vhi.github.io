import React from 'react'
import './vhiInputfield.css'

function VhiInputField() {
    return (
        <div className='input__over_all__container'>
            {/* first row */}
            <div className='first_row_container'>
                <div className='level-one' id='level-one'>
                    <label for="First Name">First Name</label>
                    <input type="text" className="first__row" />
                </div>
                <div className='level-two' id='level-one'>
                    <label for="Last Name">Last Name</label>
                    <input type="text" className="first__row" />
                </div>

                <div className='level-three' id='level-one'>
                    <label for="Address">Address</label>
                    <input type="text" className="first__row" />
                </div>
            </div>

            {/* second row */}
            <div className='second_row_container'>

                <div className='level-four' id='level-two'>
                    <label for="Date of Birth">Date of Birth</label>
                    <input type="text" className="second__row" />
                </div>
                <div className='level-five' id='level-two'>
                    <label for="Identity Number">Identity Number</label>
                    <input type="text" className="second__row" />
                </div>
                <div className='level-six' id='level-two'>
                    <label htmlFor="Gender">Gender</label>
                    <select>
                        <option>M</option>
                        <option>F</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default VhiInputField