import React from 'react'
import './Hero.css'
// import pfp from "../../assets/developer-8764526_1280.jpg"

const Hero = () => {
  return (
    
    <div className='container'>
        <div className="intro"></div>
        <div className="text-div">
            
            <div className="self-intro">
              <p className='greetings'>Hello,</p>
              <p className='self-name'>i'm Anmol,</p>
              
            </div>
            <div className="imagepfp">
              <img src="https://i.ibb.co/0Zh4yLk/developer-image.jpg" alt="developer-image" />
            </div>
            
        </div>
    </div>
  )
}

export default Hero