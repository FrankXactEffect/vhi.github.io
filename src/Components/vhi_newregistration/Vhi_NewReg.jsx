import React from 'react'
import "./vhiNewReg.css"
import HelpIcon from '@mui/icons-material/Help';
import Newreg from './newRegInput/Newreg'
import NewUpload from './newRegUpload/NewUpload'
import NewButton from './newregbutton/NewButton'
import Vhi_footer from '../vhi_footer/Vhi_footer'
import { Link } from 'react-router-dom'




function Vhi_NewReg() {


    return (
        <div className='newRegistration-container'>
            <div className='banner__title'>
                <h1>New Registration</h1>
                <p>Owner Identification</p>
            </div>
            <form>
                <Newreg />
                <NewUpload />
                <NewButton />
            </form>
            <Vhi_footer />
            <Link to={""}>
                <div className='ques-con'>
                    <HelpIcon className='question-icon' />
                </div>
            </Link>

        </div>
    )
}

export default Vhi_NewReg