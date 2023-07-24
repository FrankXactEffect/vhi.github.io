import React from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import './oldupload.css'
function OldUpload() {
    return (
        <div className='oldpload-container'>
            <div className='box-container-four'>
                <div className='old-upload-box'>
                    <UploadFileIcon className='olduploadIcon ' />
                    <p>Car License</p>
                </div>
                <div className='old-upload-box'>
                    <UploadFileIcon className='olduploadIcon ' />
                    <p>Road Worthiness</p>
                </div>
                <div className='old-upload-box'>
                    <UploadFileIcon className='olduploadIcon ' />
                    <p>Insurance Letter</p>
                </div>
            </div>

            <div className='box-container-three'>

                <div className='old-upload-box'>
                    <UploadFileIcon className='uploadIcon' />
                    <p>Heavy Goods Permit</p>
                </div>
                <div className='old-upload-box'>
                    <UploadFileIcon className='uploadIcon' />
                    <p>Carrier Permit</p>
                </div>
            </div>
        </div>
    )
}

export default OldUpload