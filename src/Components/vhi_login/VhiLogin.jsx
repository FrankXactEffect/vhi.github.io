import React from 'react'
import './vhiLogin.css'
import RightLogin from './rightlogin/RightLogin'
import LeftLogin from './leftLogin/LeftLogin'
function VhiLogin() {
    return (
        <div className='vhiloginContainer'>
            <RightLogin />
            <LeftLogin />
        </div>
    )
}

export default VhiLogin