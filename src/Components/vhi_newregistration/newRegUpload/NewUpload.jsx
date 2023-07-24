import React from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import './newUpload.css'
function NewUpload() {
    return (
        <div className='box-container'>

            <div className='single-traced-upload-box'>
                <UploadFileIcon className='uploadIcon' />
                <p>Identity Card</p>
            </div>

        </div>
    )
}

export default NewUpload