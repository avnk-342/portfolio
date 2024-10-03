import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    
    <div className='container'>
        <div className="intro"></div>
        <div className="text-div">
            
            <div className="self-intro">
              <p className='greetings'>Hello,</p>
              <p className='self-name'>I'm <span className='name'>Anmol Koundal</span></p>
              <p className='self-description'>Computer Science student with strong foundation in algorithms and data structure. Proficient in various programming languages such as Python, C++, Kotlin, with hands-on experience in full-stack development. Demonstrated problem-solving skills through academic projects and competitive coding. Eager to contribute to innovative solutions to excel in dynamic, fast-paced environments</p>
              <div className='contact-div'>
                <ul className="contact-list">
                  <li><a href="mailto:avnk.24598@gmail.com">Email</a></li>
                  <li><a href="https://www.linkedin.com/in/anmol-koundal-19748a241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>LinkedIn</a></li>
                  <li><a href="https://github.com/avnk-342" target='_blank'>GitHub</a></li>
                  <li><a href="/resume">Resume</a></li>
                </ul>

              </div>
            </div>
            <div className="imagepfp">
              <img src="https://i.ibb.co/0Zh4yLk/developer-image.jpg" alt="developer-image" />
            </div>
            
        </div>
    </div>
  )
}

export default Hero