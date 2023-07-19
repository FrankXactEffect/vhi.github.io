import React from 'react'
import './vhiUpload.css'
import UploadFileIcon from '@mui/icons-material/UploadFile';
function Vhi_upload() {
    return (
        <div className='traced-upload-container'>
            <p className='sub__caption'>Vehicle Identification</p>
            <div className='box-container'>
                <div className='traced-upload-box'>
                    <UploadFileIcon className='uploadIcon' />
                    <p>Owner Passport</p>
                </div>
                <div className='traced-upload-box'>
                    <UploadFileIcon className='uploadIcon' />
                    <p>Attestation Letter</p>
                </div>
                <div className='traced-upload-box'>
                    <UploadFileIcon className='uploadIcon' />
                    <p>Purchase Reciept</p>
                </div>
                <div className='traced-upload-box'>
                    <UploadFileIcon className='uploadIcon' />
                    <p>Proof of Ownership</p>
                </div>
                <div className='traced-upload-box'>
                    <UploadFileIcon className='uploadIcon' />
                    <p>Driver's License</p>
                </div>
            </div>
        </div>
    )
}

export default Vhi_upload