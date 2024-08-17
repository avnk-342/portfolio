import React from 'react'
import './Hero.css'
import pfp from "../../assets/developer-8764526_1280.jpg"

const Hero = () => {
  return (
    
    <div className='container'>
        <div className="intro"></div>
        <div className="text-div">
            
            <div className="self-intro">
              <p className='greetings'>Hello,</p>
              <p className='self-name'>i'm Anmol,</p>
              <p className='self-desigination'>developer || coding enthusiast</p>
            </div>
            <div className="imagepfp">
              <img src={pfp} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default Hero