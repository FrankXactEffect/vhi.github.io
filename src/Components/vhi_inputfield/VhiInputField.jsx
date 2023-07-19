import React from 'react'
import './vhiInputfield.css'

function VhiInputField() {
    return (
        <div className='input__over_all__container'>
            {/* first row */}
            <div className='level-one' id='level-one'>
                <label for="First Name">First Name</label>
                <input type="text" className="first__row" />
            </div>

        </div>
    )
}

export default VhiInputField