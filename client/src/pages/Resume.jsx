import React from 'react'
import "./Resume.css"


const Resume = () => {
    return(
        <div className='resume-main'>
            <div className='back-button-div'>
                <button className='back-button'><a href="/">Home</a></button>
            </div>
            
            <div className="pdf-viewer">
                <iframe src="https://drive.google.com/file/d/1rPWm8qOadRrM2U9oQWyWU8UOG2FI1TQK/preview" width="100%" height="100%"></iframe>
            </div>
        </div>
    )
}

export default Resume

