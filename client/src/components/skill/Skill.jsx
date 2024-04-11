import React from 'react'
import "./Skill.css"
import { useState } from 'react'
import {slides} from "/home/vodkov/myFiles/gitRepos/portfolio/client/src/data.json"

const Skill = () => {
  const [prevdata, preData] = useState("")
  const [currdata, currData] = useState("")
  const [nextdata, nexData] = useState("")
  function prev(){
    
  }
  
  return (
    <div className="main">
        <div className="heading">
            <h2>Skills</h2>
        </div>
        <div className="carousel">
          <button onClick={prev}>XYZ</button>
          <div className='carousel-plate plate-left'>
            <p></p>
          </div>
          <div className='carousel-plate plate-centre'></div>
          <div className='carousel-plate plate-right'></div>    
          <button></button>       
        </div>
    </div>
  )
}

export default Skill