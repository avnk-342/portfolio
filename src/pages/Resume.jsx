import React from 'react'
import pdfcom from "../assets/resume-test.pdf"
import "./Resume.css"

const Resume = () => {
    return(
        <div className='resume-main'>
            <div className="pdf-viewer">
                <iframe src={pdfcom} width="100%" height="100%" />
            </div>
        </div>
    )
}

export default Resume

