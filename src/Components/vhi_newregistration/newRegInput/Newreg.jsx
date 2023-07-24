import React from 'react'
import './newReg.css'
function Newreg() {
    return (
        <div className='newregistrationContainer'>
            <div className='rowOne-newregistration'>
                <div className='level-one' id='level-one'>
                    <label for="First Name">First Name</label>
                    <input type="text" className="first__row" />
                </div>
                <div className='level-one' id='level-one'>
                    <label for="First Name">Last Name</label>
                    <input type="text" className="first__row" />
                </div>
                <div className='level-one' id='level-one'>
                    <label for="First Name">Address</label>
                    <input type="text" className="first__row" />
                </div>
            </div>

            <div className='rowTwo-newregistration'>
                <div className='level-one' id='level-one'>
                    <label for="First Name">Date of Birth</label>
                    <input type="text" className="first__row" />
                </div>
                <div className='level-one' id='level-one'>
                    <label for="First Name">Identity Number</label>
                    <input type="text" className="first__row" />
                </div>
                <div className='level-one' id='level-one'>
                    <label for="First Name">Gender</label>
                    <select>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Newreg