import React from 'react'
import './Hero.css'
// import profile from '/home/vodkov/myFiles/gitRepos/portfolio/client/src/assets/logo_sample.png'

const Hero = () => {
  return (
    <div className='container'>
        <div className="intro">
          {/* <div className="image">
            <img src={profile} alt="" />
          </div> */}
          <div className="para">
            <h4>Welcome to my Portfolio</h4>
            <h3>Hi, i'm Anmol</h3>
            <p>this is me</p>
          </div>
        </div>
    </div>
  )
}

export default Hero