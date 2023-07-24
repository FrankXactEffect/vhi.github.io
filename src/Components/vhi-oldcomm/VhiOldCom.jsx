import React from 'react'
import OldInput from './oldcominput/OldInput'
import './vhiOldCom.css'
import OldUpload from './oldUpload/OldUpload'
import OldButton from './oldbutton/OldButton'
import OldFooter from './oldfooter/OldFooter'
import HelpIcon from '@mui/icons-material/Help';


import { Link } from 'react-router-dom'


function VhiOldCom() {
    return (
        <div>

            <div className='banner__title'>
                <h1>Vehicle Plate Renewal</h1>
            </div>
            <form className='oldCommercial-form'>
                <OldInput />
                <OldUpload />
                <OldButton />
            </form>

            <OldFooter />
            <Link to={""}>
                <div className='ques-con'>
                    <HelpIcon className='question-icon' />
                </div>
            </Link>
        </div>
    )
}

export default VhiOldCom