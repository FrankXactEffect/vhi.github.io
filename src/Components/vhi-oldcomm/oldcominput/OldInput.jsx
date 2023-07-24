import React from 'react'
import './oldInput.css'


function OldInput() {
    return (
        <div className='oldInputContainer'>
            <div className='level-one' id='level-one'>
                <label htmlFor="license order">License ID</label>
                <input type="text" className="first__row" />
            </div>
            <div className='level-one' id='level-one'>
                <label htmlFor="license order">Road Worthiness ID</label>
                <input type="text" className="first__row" />
            </div>
            <div className='level-one' id='level-one'>
                <label htmlFor="license order">Vehicle Identification Number</label>
                <input type="text" className="first__row" />
            </div>
        </div>
    )
}

export default OldInput