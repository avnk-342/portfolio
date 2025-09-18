import React from 'react'
import "./AboutHero.css"
// import pfp from "../../assets/developer-image.jpg"

const AboutHero = () => {
  return (
    <div >
      <div className='about-main-div'>
        <div className='about-landing'>
            {/* <img src={pfp} alt="Image" className='dev-image'/> */}
        </div>
        <div className='intro-text'>
            <h1>I'm Anmol Koundal</h1>
            <p className='self-description'>Computer Science student with strong foundation in algorithms and data structure. Proficient in various programming languages such as Python, C++, Kotlin, with hands-on experience in full-stack development. Demonstrated problem-solving skills through academic projects and competitive coding. Eager to contribute to innovative solutions to excel in dynamic, fast-paced environments</p>
        </div>
      </div>
    </div>
  )
}

export default AboutHero